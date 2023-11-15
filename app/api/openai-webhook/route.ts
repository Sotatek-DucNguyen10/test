import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = req.body;
  const data = await req.json();

  console.log("🚀 ~ POST ~ payload:", payload);
  console.log("🚀 ~ POST ~ data:", data);

  try {
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(e);
  }
}
