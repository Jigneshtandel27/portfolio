import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";
import { contactSchema } from "@/lib/validators/contact-validator";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload using Zod schema
    const parsedData = contactSchema.safeParse(body);

    if (!parsedData.success) {
      // Extract the first specific validation error message (e.g. "Name must contain only letters")
      const errorMessage =
        parsedData.error.issues[0]?.message || "Invalid request payload.";
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    // 2. Establish connection to MongoDB Atlas
    await connectToDatabase();

    // 3. Store the validated, sanitized data in the cluster database
    const contactSubmission = await Contact.create(parsedData.data);

    // 4. Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been stored successfully in MongoDB Atlas!",
        data: contactSubmission,
      },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Database connection/save error in API route:", error);

    return NextResponse.json(
      {
        error:
          "Internal Server Error: Failed to save submission. Ensure MONGODB_URI is correctly configured.",
      },
      { status: 500 },
    );
  }
}
