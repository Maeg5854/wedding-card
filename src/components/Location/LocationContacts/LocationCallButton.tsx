import { IoCall } from "react-icons/io5";
import Button from "@/components/common/Button";

export default function LocationCallButton() {
  return (
    <Button
      onClick={() => {
        window.open("tel:02-2197-0230", "_blank");
      }}
    >
      <IoCall size={20} color="black" />
      <div>전화</div>
    </Button>
  );
}
