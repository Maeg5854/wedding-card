import { ReactNode } from "react";

export default function ArchWindowPhotoFrame({
  src,
  style,
  children,
}: {
  src: string;
  style?: React.CSSProperties;
  children?: ReactNode | ReactNode[];
}) {
  return (
    <div style={{ ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 100% 100%">
        <defs>
          <clipPath id="archwindow">
            <path
              d="M 0 150 
                 A 150 150 0 0 1 300 150"
              fill="red"
            />
            <rect x="0" y="150" width="300" height="280" fill="red" />
          </clipPath>
        </defs>
        <g clipPath="url(#archwindow)">
          <image href={src} width="300" height="450" />
        </g>
      </svg>
      {children}
    </div>
  );
}
