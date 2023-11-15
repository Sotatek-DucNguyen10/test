import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = req.body;
  try {
    return NextResponse.json(payload);
  } catch (e) {
    return NextResponse.json(e);
  }
}
