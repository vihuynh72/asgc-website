export type GalleryPhoto = {
  src: string;
  alt: string;
  title?: string;        // Short heading for the photo
  description?: string;  // Longer caption/description shown beside the gallery
  credit?: string;       // Optional photographer credit
};

// Helper function to create gallery photos with consistent defaults
export function createGalleryPhoto(photo: Partial<GalleryPhoto> & Pick<GalleryPhoto, 'src' | 'alt'>): GalleryPhoto {
  return {
    title: 'Campus Moment',
    description: 'A moment captured from campus life and ASGC activities.',
    credit: 'ASGC',
    ...photo
  };
}

// Helper function to load photos from a simple data structure
export function createGalleryFromData(photos: Array<{
  src: string;
  alt: string;
  title?: string;
  description?: string;
  credit?: string;
}>): GalleryPhoto[] {
  return photos.map(photo => createGalleryPhoto(photo));
}

// Gallery photos data - easily editable
const galleryData = [
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3R1ZGVudCBHb3Zlcm5tZW50PC90ZXh0Pgo8L3N2Zz4K",
    alt: "ASGC Student Senate meeting in session",
    title: "Student Government in Action",
    description: "Our Student Senate meets regularly to discuss important campus issues and advocate for student needs. Join us every Tuesday at 2:30 PM in the Student Center.",
    credit: "ASGC Communications"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTBCOTgxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2FtcHVzIExpZmU8L3RleHQ+Cjwvc3ZnPgo=",
    alt: "Students enjoying campus activities during lunch",
    title: "Campus Life & Community",
    description: "Grossmont College offers a vibrant campus community with diverse activities, clubs, and events that bring students together throughout the academic year.",
    credit: "Campus Photography"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjU5RTBCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T3V0cmVhY2g8L3RleHQ+Cjwvc3ZnPgo=",
    alt: "ASGC representatives at student outreach event",
    title: "Student Outreach & Engagement",
    description: "Our ASGC representatives actively engage with students across campus to hear your concerns and ideas. Find us at tabling events every week!",
    credit: "Student Activities"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRUY0NDQ0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWNhZGVtaWMgU3VwcG9ydDwvdGV4dD4KPC9zdmc+Cg==",
    alt: "Students collaborating in the library study area",
    title: "Academic Excellence",
    description: "Supporting student academic success is at the heart of ASGC's mission. We advocate for better resources, tutoring programs, and study spaces.",
    credit: "Academic Affairs"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjOEI1Q0Y2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3VzdGFpbmFiaWxpdHk8L3RleHQ+Cjwvc3ZnPgo=",
    alt: "Campus sustainability fair with student organizations",
    title: "Sustainability & Campus Initiatives",
    description: "ASGC supports environmental sustainability initiatives and works with student clubs to promote green practices across our beautiful campus.",
    credit: "Environmental Club"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDY5MUVGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VsZWJyYXRpb248L3RleHQ+Cjwvc3ZnPgo=",
    alt: "Students celebrating at graduation ceremony",
    title: "Celebrating Student Success",
    description: "From orientation to graduation, ASGC is here to support your journey. We celebrate every milestone and achievement of our amazing student body.",
    credit: "Graduation Committee"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDU5NjY5Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29sbGFib3JhdGlvbjwvdGV4dD4KPC9zdmc+Cg==",
    alt: "Students in study group session",
    title: "Collaborative Learning",
    description: "Peer-to-peer learning and study groups are essential to student success. ASGC supports initiatives that help students connect and learn together.",
    credit: "Academic Support"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjREMxNjM5Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RXZlbnRzPC90ZXh0Pgo8L3N2Zz4K",
    alt: "Campus event and student engagement",
    title: "Campus Events & Traditions",
    description: "From welcome week to end-of-year celebrations, ASGC organizes and supports events that build school spirit and create lasting memories.",
    credit: "Student Programming"
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTU4MDNEIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TGVhZGVyc2hpcDwvdGV4dD4KPC9zdmc+Cg==",
    alt: "Student leadership development workshop",
    title: "Leadership Development",
    description: "ASGC provides leadership opportunities and training to help students develop skills that will serve them throughout their academic and professional careers.",
    credit: "Leadership Programs"
  }
];

// Convert to gallery photos using helper function
export const campusGallery: GalleryPhoto[] = createGalleryFromData(galleryData);
