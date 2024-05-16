import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../utils/cloudinary";

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
    if (!data) {
      return NextResponse.json(
        { error: "No image data provided" },
        { status: 400 },
      );
    }

    const uploadedResponse = await cloudinary.uploader.upload(data, {
      upload_preset: "dnhk16p3",
    });

    return NextResponse.json(
      { url: uploadedResponse.secure_url },
      { status: 200 },
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
