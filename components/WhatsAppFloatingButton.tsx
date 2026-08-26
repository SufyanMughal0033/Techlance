"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-premium sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappLink("Hi Techlance, I'd like to discuss a project.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Techlance on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-black/10 transition-transform duration-300 ease-premium hover:scale-105 focus-visible:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp/60 motion-safe:animate-pulse-ring" aria-hidden="true" />
        <MessageCircle
          size={26}
          className="relative text-white"
          strokeWidth={1.75}
          aria-hidden="true"
        />

        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3.5 whitespace-nowrap rounded-md bg-ink px-3.5 py-2 text-[13px] font-medium text-bg opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
