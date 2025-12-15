// Vite-specific dynamic import
const images = import.meta.glob("./*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Convert to ordered array: 1.png → index 0
export const featuredImages = Object.keys(images)
  .sort((a, b) => {
    const getNumber = (path: string) => Number(path.match(/(\d+)\.png$/)?.[1]);
    return getNumber(a) - getNumber(b);
  })
  .map((key) => images[key]);
