"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
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
                Confirmar presença
              </Link>
            </li>
            <li>
              <Link
                href="/porks-casarao"
                className="block px-4 py-3 text-black hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Porks Casarão
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
