import Image from "next/image";

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
      <svg width="calc(100% - 50px)" height="36" style={{ display: "block" }}>
        <line x1="0" y1="18" x2="100%" y2="18" stroke="white" strokeWidth="1" />
        {/* <PiHeartLight
          size={20}
          color="white"
          style={{
            transform: "translateX(-50%)",
          }}
        /> */}
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
