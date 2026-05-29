import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

// Safe, high-level override to set DNS servers to Cloudflare and Google.
// This resolves Atlas SRV record resolution failures on Windows/certain ISP networks.
try {
  setServers(["1.1.1.1", "8.8.8.8"]);
} catch (error) {
  console.warn("Unable to override Node.js DNS servers:", error);
}

/**
 * Global is used here to maintain a cached connection across hot-reloads
 * in development. This prevents database connections from growing exponentially
 * during API route executions.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseConnection: MongooseCache | undefined;
}

let cached = global.mongooseConnection;

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;

  // We validate MONGODB_URI inside the function so that Next.js static analysis
  // during `next build` compiles successfully even if the environment variable
  // is not supplied in the build container.
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local",
    );
  }

  // Initialize the cached object if it is not yet defined
  if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4, // Force IPv4
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      serverSelectionTimeoutMS: 10000, // Keep trying to connect for 10 seconds before failing
      heartbeatFrequencyMS: 10000, // Check the health of the DB every 10 seconds
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("MongoDB Connected successfully using Mongoose!");
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
