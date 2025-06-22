import Image from "next/image";
import { PiHeartLight } from "react-icons/pi";

export default function CharacterIconLineDecoration({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        gap: 10,
      }}
    >
      <Image
        src={"/images/metamong_white.png"}
        width={25}
        height={22}
        alt="damgomi"
      />
      <svg
        width="100%"
        height="36"
        viewBox="0 0 100% 36"
        style={{ display: "block" }}
      >
        <line x1="0" y1="18" x2="100%" y2="18" stroke="white" strokeWidth="1" />
        <PiHeartLight
          style={{
            position: "absolute",
            transform: "translateX(calc(50% - 10px))",
            zIndex: 1,
          }}
          size={20}
          color="white"
        />
      </svg>
      <Image
        src={"/images/damgomi_white.png"}
        width={27.06}
        height={23}
        alt="damgomi"
      />
    </div>
  );
}
