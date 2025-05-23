import { RiFileCopyLine } from "react-icons/ri";
import Button from "@/components/common/Button";
import { toast } from "react-toastify";

export default function LocationCallButton() {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText("서울 마포구 마포대로 92");
        toast.success("주소가 복사되었습니다.");
      }}
    >
      <RiFileCopyLine size={20} />
      <div>주소</div>
    </Button>
  );
}
