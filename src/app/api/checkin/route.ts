// app/api/checkin/route.ts
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Usuário não autenticado." },
        { status: 401 }
      );
    }

    const user = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY!}`,
      },
    }).then((res) => res.json());

    const { first_name, last_name } = user;

    await prisma.checkIn.create({
      data: {
        userId,
        firstName: first_name,
        lastName: last_name,
      },
    });

    return NextResponse.json({ message: "Check-in realizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao fazer check-in:", error);
    return NextResponse.json(
      { error: "Erro ao fazer check-in." },
      { status: 500 }
    );
  }
}
