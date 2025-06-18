import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const checkIns = await prisma.checkIn.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(checkIns);
  } catch (error) {
    console.error("Erro ao buscar check-ins:", error);
    return new NextResponse("Erro ao buscar check-ins", { status: 500 });
  }
}
