import { SectionHeading } from "./SectionHeading";

interface ProjectGalleryProps {
  images: Array<{ src: string; alt: string }>;
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section aria-label={`${projectName} gallery`}>
      <SectionHeading
        eyebrow="Gallery"
        title={`${projectName} Screenshots`}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </section>
  );
}
