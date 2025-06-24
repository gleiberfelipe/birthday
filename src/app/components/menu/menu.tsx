"use client";

import { useState } from "react";
import Link from "next/link";
import "./style.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="button">
        ☰
      </button>

      {isOpen && (
        <div className="options">
          <ul className="list">
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-black hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Confirmar presenca
              </Link>
            </li>
            <li>
              <Link
                href="/porks-casarao"
                className="block px-4 py-3 text-black hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Porks Casarao
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
