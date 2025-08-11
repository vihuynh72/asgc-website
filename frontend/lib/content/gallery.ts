export type GalleryPhoto = {
  src: string;
  alt: string;
  title?: string;        // Short heading for the photo
  description?: string;  // Longer caption/description shown beside the gallery
  credit?: string;       // Optional photographer credit
};

// Drop images into `frontend/public/` and add them here.
// Examples:
// { src: "/photos/campus-quad.jpg", alt: "Students in the main quad" }
// { src: "/photos/asgc-meeting.jpg", alt: "ASGC meeting in session" }
export const campusGallery: GalleryPhoto[] = [
  // Intentionally empty — the OrbitGallery will show placeholders until you add real photos
];
