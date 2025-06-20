export default function ConverTitle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        fontFamily: "EphesisRegular",
        fontSize: "100px",
        ...style,
      }}
    >
      <div
        style={{
          margin: "0 auto",
          alignSelf: "center",
          fontSize: "49px",
          transform: "rotate(-6deg)",
          width: "fit-content ",
        }}
      >
        We Get
      </div>
      <div
        style={{
          margin: "0 auto",
          position: "relative",
          top: "-30px",
          fontSize: "103px",
          transform: "rotate(-6deg)",
          width: "fit-content",
        }}
      >
        Married
      </div>
    </div>
  );
}
