'use client';

import { MessageCircle } from 'lucide-react';
import { SITE } from '@/data/site';

// Opens the device SMS app pre-addressed to the business number.
// Works on iPhone and Android.
const SMS_HREF = `sms:${SITE.phoneHref.replace('tel:', '')}`;

export default function TextBubble() {
  return (
    <a
      href={SMS_HREF}
      aria-label="Text Southern Buck Lawn for a fast response"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-safety-orange py-3 pl-3 pr-3 shadow-2xl ring-4 ring-white/30 transition-all hover:gap-2 hover:pr-5 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-midnight-moss text-safety-orange">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="flex max-w-0 flex-col overflow-hidden whitespace-nowrap leading-tight text-midnight-moss transition-all duration-300 group-hover:max-w-[160px]">
        <span className="font-anton text-sm uppercase tracking-wide">Text Us</span>
        <span className="font-barlow text-xs font-bold uppercase">Fast Response</span>
      </span>
      <span className="ml-2 flex flex-col leading-tight text-midnight-moss sm:hidden">
        <span className="font-anton text-sm uppercase tracking-wide">Text Us</span>
        <span className="font-barlow text-[11px] font-bold uppercase">Fast Response</span>
      </span>
    </a>
  );
}
