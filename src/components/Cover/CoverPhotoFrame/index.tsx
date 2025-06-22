"use client";

import ArchWindowPhotoFrame from "./ArchWindowPhotoFrame";
import CharacterIconLineDecoration from "./CharacterIconLineDecoration";

export default function CoverPhotoFrame({ src }: { src: string }) {
  return (
    <div>
      <ArchWindowPhotoFrame
        src={src}
        style={{ width: "300px", height: "400px" }}
      >
        <CharacterIconLineDecoration
          style={{ position: "relative", bottom: "45px", zIndex: 1 }}
        />
      </ArchWindowPhotoFrame>
    </div>
  );
}
