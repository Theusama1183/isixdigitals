// A `<picture>`-free responsive image: the `<img>` keeps the design system's
// sizing and parallax hooks, while `srcSet`/`sizes` let the browser pick a
// smaller WebP. Keeping the WebP URL on the `<img>` (rather than a `<source>`)
// means React 19's automatic preload points at the file that is actually used,
// instead of downloading a JPEG fallback alongside it.
type ResponsiveImageProps = {
  /** Base file name in /public/images, e.g. "studio-hero". */
  name: string;
  /** Generated widths for `${name}-${width}.webp`. */
  widths: readonly number[];
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  /** `true` adds the parallax hook used by the chrome's scroll effect. */
  parallax?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

export function ResponsiveImage({
  name,
  widths,
  alt,
  width,
  height,
  sizes,
  className,
  parallax = false,
  priority = false,
  loading,
}: ResponsiveImageProps) {
  const largest = widths[widths.length - 1] ?? width;
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");

  return (
    <img
      className={className}
      data-parallax={parallax ? "" : undefined}
      src={`/images/${name}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
