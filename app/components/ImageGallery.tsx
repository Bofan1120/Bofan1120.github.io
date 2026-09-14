import Image from "next/image";
import type { NewsImage } from "../data/site";

export function ImageGallery({ images }: { images: NewsImage[] }) {
  if (!images.length) return null;

  return (
    <div className={`news-gallery gallery-${images.length}`}>
      {images.map((image) => (
        <a
          href={image.src}
          target="_blank"
          rel="noreferrer"
          key={image.src}
          aria-label={`Open full-size image: ${image.alt}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1000}
            sizes="(max-width: 700px) calc(100vw - 40px), 620px"
          />
        </a>
      ))}
    </div>
  );
}
