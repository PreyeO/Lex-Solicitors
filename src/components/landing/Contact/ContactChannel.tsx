import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { ContactChannel as ContactChannelData } from "@/types";

const iconMap: Record<ContactChannelData["icon"], LucideIcon> = {
  whatsapp: MessageCircle,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
};

const linkClass =
  "rounded-sm text-base font-medium text-ink underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none";

export interface ContactChannelProps {
  channel: ContactChannelData;
}

/** A single contact channel: decorative icon, label, and linked (or plain) value. */
export function ContactChannel({ channel }: ContactChannelProps) {
  const Icon = iconMap[channel.icon];

  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
        <Icon aria-hidden className="size-5" />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {channel.label}
        </span>
        {channel.href ? (
          <a
            href={channel.href}
            aria-label={channel.ariaLabel}
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noopener noreferrer" : undefined}
            className={linkClass}
          >
            {channel.value}
          </a>
        ) : (
          <span className="text-base font-medium text-ink">
            {channel.value}
          </span>
        )}
      </div>
    </div>
  );
}
