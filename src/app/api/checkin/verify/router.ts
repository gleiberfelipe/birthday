// app/api/checkin/verify/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "ID de usuário ausente." },
      { status: 400 }
    );
  }

  const existingCheckIn = await prisma.checkIn.findFirst({
    where: { userId },
  });

  return NextResponse.json({ exists: !!existingCheckIn });
}
