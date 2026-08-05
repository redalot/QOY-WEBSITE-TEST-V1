// Single source of truth for image paths.
//
// Filenames live in media.json so `npm run check:assets` can verify they exist
// in public/ without executing app code. Building the URLs in exactly one place
// also means a rename can't leave a stale path behind in some other file.

import media from './media.json';

const url = (file) => `${import.meta.env.BASE_URL}${file}`;

export const badgeSrc = url(media.badge);

/** Every gallery image, with its display title and alt text. */
export const galleryImages = media.gallery.map((image) => ({ ...image, src: url(image.file) }));

/** The four shown in the homepage "Operations in Action" strip. */
export const galleryPreview = galleryImages.slice(0, 4);

/** Backgrounds cycled behind the hero. */
export const heroSlides = galleryImages.slice(0, 6).map((image) => image.src);
