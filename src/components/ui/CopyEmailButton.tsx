"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-zinc-50"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" />
          <span>Copied {email}</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 text-zinc-400" />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
