export function ProductPlaceholder({
  title,
  detail,
  compact = false,
}: {
  title: string;
  detail?: string;
  compact?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`${title}${detail ? `: ${detail}` : ""} placeholder`}
      className={`product-placeholder grid w-full place-items-center rounded-2xl bg-white/95 px-4 text-center shadow-lg ${
        compact ? "min-h-40 py-3" : "min-h-64 px-6 py-8"
      }`}
    >
      <div>
        <div
          aria-hidden="true"
          className={`mx-auto grid place-items-center rounded-[1.75rem] border-2 border-calm/30 bg-white/85 shadow-lg ${
            compact ? "size-16 p-2" : "size-32 p-4"
          }`}
        >
          <span className="grid size-full place-items-center rounded-2xl bg-calm-soft font-display text-xl font-extrabold text-calm">
            Favor
          </span>
        </div>
        <p className={`${compact ? "mt-2" : "mt-4"} font-bold text-foreground`}>{title}</p>
        {detail ? <p className="mt-1 text-ink/80">{detail}</p> : null}
        {!compact ? <p className="mt-2 font-semibold text-ink/80">Product photo placeholder</p> : null}
      </div>
    </div>
  );
}

export function EditorialPhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} photo placeholder`}
      className="grid min-h-[22rem] place-items-center rounded-3xl border border-border bg-gradient-to-br from-bloom-soft via-background to-calm-soft p-8 text-center shadow-sm"
    >
      <div>
        <div
          aria-hidden="true"
          className="mx-auto grid size-24 place-items-center rounded-full bg-background text-xl font-extrabold text-bloom shadow-md"
        >
          FF
        </div>
        <p className="mt-5 text-lg font-bold">{label}</p>
        <p className="mt-1 text-ink/80">Photo to be added</p>
      </div>
    </div>
  );
}
