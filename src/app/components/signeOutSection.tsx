"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";

export default function SignOutSection() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return null;

  return (
    <div className="mt-8">
      <SignOutButton>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Sair
        </button>
      </SignOutButton>
    </div>
  );
}
