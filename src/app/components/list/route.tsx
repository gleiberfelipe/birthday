import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const checkIns = await prisma.checkIn.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(checkIns);
}
