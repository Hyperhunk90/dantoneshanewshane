import { MapPin } from 'lucide-react';

export default function ServiceAreaMap({ label = 'Our Service Area' }: { label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-primary/10 px-5 py-3">
        <MapPin className="h-5 w-5 text-safety-orange" />
        <span className="font-anton text-lg uppercase tracking-wider text-primary">{label}</span>
      </div>
      <div className="relative h-80 w-full">
        {/* Map centered on the Walker / Denham Springs / Baton Rouge corridor.
            Replace src with your Google Business Profile embed once it is live. */}
        <iframe
          title="Southern Buck Lawn service area map"
          src="https://www.google.com/maps?q=Walker,+Louisiana&output=embed"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
