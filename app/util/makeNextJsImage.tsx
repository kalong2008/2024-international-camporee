import type { RenderImageContext, RenderImageProps } from "react-photo-album";
import Image from "next/image";

export function NextJsImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes="(min-width: 808px) 50vw, 100vw"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="hoverImage"
        quality={100}
      />
    </div>
  );
}