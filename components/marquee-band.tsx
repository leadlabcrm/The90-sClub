const line =
  "Kerala kitchen ✦ Rooftop evenings ✦ Flying Fox craft beer ✦ Electronic City ✦ Open daily noon to midnight ✦ ";

export function MarqueeBand() {
  return (
    <div className="marquee" aria-label="Venue highlights">
      <div className="marquee-track" aria-hidden="true">
        <span>{line.repeat(2)}</span>
        <span>{line.repeat(2)}</span>
      </div>
    </div>
  );
}
