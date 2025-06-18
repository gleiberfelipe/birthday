"use client";

import { useEffect, useState } from "react";
import CheckInButton from "@/app/components/button";
import CheckInList from "@/app/components/checkinList";
import "./styles.css";
import Image from "next/image";

type CheckIn = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  createdAt: string;
};

export default function HomePage() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

  const fetchCheckIns = async () => {
    const res = await fetch("/api/checkin/list");
    const data = await res.json();
    setCheckIns(data);
  };

  useEffect(() => {
    fetchCheckIns();
  }, []);

  return (
    <main className="container">
      <div className="bg-white w-[303px] h-[447px]">
        <video autoPlay muted playsInline loop width={303} height={447}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="box">
        <h1 className="titulo">
          Confirmar <br></br> presenca
        </h1>
      </div>
      <div className="confirmation">
        <CheckInButton onCheckInSuccess={fetchCheckIns} />
        <Image
          src="/pig.png"
          alt="pig"
          width={250}
          height={250}
          style={{ transform: "rotate(17deg)" }}
        />
      </div>

      <CheckInList checkIns={checkIns} />
    </main>
  );
}
