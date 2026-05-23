import Image from "next/image";

/**
 * Subtle OSC Engineering watermark for hero sections.
 * Sits absolutely in the bottom-right corner of the hero container.
 * Logo is dark red on white, so a small white tile keeps it readable
 * against any dark hero background.
 */
export function HeroWatermark() {
  return (
    <div className="absolute bottom-5 right-5 z-20 pointer-events-none">
      <div className="bg-white/85 rounded-md px-1.5 py-1 shadow-md backdrop-blur-sm">
        <Image
          src="/images/osc-logo.png"
          alt=""
          width={140}
          height={94}
          className="h-7 sm:h-8 w-auto object-contain opacity-90"
        />
      </div>
    </div>
  );
}
