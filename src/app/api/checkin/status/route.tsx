// app/api/checkin/status/route.ts
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ checkedIn: false }, { status: 200 });
    }

    const checkIn = await prisma.checkIn.findFirst({
      where: { userId },
    });

    return NextResponse.json({ checkedIn: !!checkIn });
  } catch (error) {
    console.error("Erro ao verificar status do check-in:", error);
    return NextResponse.json({ checkedIn: false }, { status: 500 });
  }
}
