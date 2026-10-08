import { cn } from "@/lib/utils";

/** ₹ uses the system font so Inter does not download its latin-ext file on LCP. */
export function Price({
  amount,
  className,
}: {
  amount: number;
  className?: string;
}) {
  return (
    <span className={cn("tabular-nums", className)}>
      <span className="rupee-sign">₹</span>
      {amount.toLocaleString("en-IN")}
    </span>
  );
}

export function RupeeText({ text }: { text: string }) {
  const parts = text.split("₹");
  if (parts.length === 1) return text;

  return parts.map((part, index) =>
    index === 0 ? (
      part
    ) : (
      <span key={index}>
        <span className="rupee-sign">₹</span>
        {part}
      </span>
    ),
  );
}
