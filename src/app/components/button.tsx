"use client";

import { useEffect, useState } from "react";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import "./style.css";

// 👇 Adiciona tipo da prop
interface CheckInButtonProps {
  onCheckInSuccess?: () => void;
}

export default function CheckInButton({
  onCheckInSuccess,
}: CheckInButtonProps) {
  const { user, isSignedIn } = useUser();
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!isSignedIn) return;

    fetch("/api/checkin/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.checkedIn) {
          setDisabled(true);
          setStatus("Você já confirmou presença.");
        }
      })
      .catch((error) => {
        console.error("Erro ao verificar status de check-in:", error, user);
      });
  }, [isSignedIn]);

  const handleCheckIn = async () => {
    try {
      const res = await fetch("/api/checkin", { method: "POST" });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Erro HTTP: ${res.status} - ${text}`);
      }

      const data = await res.json();
      setStatus(data.message || "Check-in realizado com sucesso!");
      setDisabled(true);

      // ✅ Chama a função após sucesso
      if (onCheckInSuccess) {
        onCheckInSuccess();
      }
    } catch (error) {
      console.error("Erro ao fazer check-in:", error);
      setStatus("Erro ao fazer check-in.");
    }
  };

  if (!isSignedIn) {
    return (
      <div className="statusLogged">
        <p className="itIsNotlogged">
          Voce <span>precisa </span>estar <span>logado </span>para{" "}
          <span>fazer </span>check-in :
        </p>
        <SignInButton mode="modal">
          <button className="SignIn">Entrar</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="SingUp">Cadastrar</button>
        </SignUpButton>
      </div>
    );
  }

  return (
    <div className="statusLogged">
      <button
        onClick={handleCheckIn}
        disabled={disabled}
        className={`SignIn ${disabled ? "active" : "disable"}`}
      >
        Confirmar
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
