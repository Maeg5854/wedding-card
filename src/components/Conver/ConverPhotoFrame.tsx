"use client";

export default function CoverPhotoFrame({
  style,
  src,
}: {
  style: React.CSSProperties;
  src: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg width="300px" height="450px" viewBox="0 0 300 450">
        <defs>
          <clipPath id="archwindow">
            <path
              d="M 0 150 
                 A 150 150 0 0 1 300 150"
              fill="red"
            />
            <rect x="0" y="150" width="300" height="300" fill="red" />
          </clipPath>
        </defs>
        <g clipPath="url(#archwindow)">
          <image href={src} width="300" height="450" />
        </g>
      </svg>
    </div>
  );
}
