import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

export const galleryBaseDir = path.join(process.cwd(), "public", "screenshots");

export function getGalleryImages(slug: string): string[] {
  const dir = path.join(galleryBaseDir, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `${import.meta.env.BASE_URL}screenshots/${slug}/${file}`);
}

export function hasGalleryImages(slug: string): boolean {
  return getGalleryImages(slug).length > 0;
}
