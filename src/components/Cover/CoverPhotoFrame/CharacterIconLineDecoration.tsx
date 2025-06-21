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
        justifyContent: "space-between",
        padding: "0 10px",
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
        height="24"
        viewBox="0 0 200 24"
        style={{ display: "block" }}
      >
        <line x1="0" y1="12" x2="200" y2="12" stroke="white" strokeWidth="1" />
        <PiHeartLight
          style={{
            position: "absolute",
            left: 50,
            top: 0,
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
