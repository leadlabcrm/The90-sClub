import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  inverse = false,
  compact = false,
}: {
  className?: string;
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <svg
      viewBox={compact ? "0 0 72 92" : "0 0 312 92"}
      role="img"
      aria-label="The 90s Club Taproom and Kitchen"
      className={cn(
        "h-auto",
        inverse ? "text-gold" : "text-blue",
        compact ? "w-[3.15rem]" : "w-[12.5rem]",
        className,
      )}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="68" height="88" rx="32" strokeWidth="2.5" />
        <rect x="6.5" y="6.5" width="59" height="79" rx="27.5" strokeWidth="1.25" />
        <path d="M12 34h48" strokeWidth="1.2" />
        <circle cx="36" cy="24" r="6.25" strokeWidth="1.8" />
        <path
          d="M36 17.6V9.7M31.7 19.7l-6.4-7.5M27.9 24H14.5M40.3 19.7l6.4-7.5M44.1 24h13.4"
          strokeWidth="1.65"
        />
        <path d="M25 70h22M33 74l3 3 3-3" strokeWidth="1.35" />
      </g>

      <text
        x="36"
        y="41.2"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="6.2"
        letterSpacing="2.2"
      >
        THE
      </text>
      <text
        x="36"
        y="64.3"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="27"
        fontWeight="700"
        letterSpacing="-1.6"
      >
        90s
      </text>
      <text
        x="36"
        y="82"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="2.6"
      >
        CLUB
      </text>

      {!compact ? (
        <g fill="currentColor">
          <text
            x="86"
            y="28"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontSize="15"
            fontWeight="650"
            letterSpacing="3.8"
          >
            THE
          </text>
          <text
            x="82"
            y="64"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontSize="45"
            fontWeight="800"
            letterSpacing="-2"
          >
            90s CLUB
          </text>
          <rect x="84" y="72.5" width="218" height="1.5" rx=".75" />
          <text
            x="86"
            y="86"
            fontFamily="var(--font-oswald), Arial Narrow, sans-serif"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="3.25"
          >
            TAPROOM + KITCHEN
          </text>
        </g>
      ) : null}
    </svg>
  );
}
