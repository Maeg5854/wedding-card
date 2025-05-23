import LocationAddressCopyButton from "./LocationAddressCopyButton";
import LocationCallButton from "./LocationCallButton";

export default function LocationContacts() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <LocationCallButton />
      <LocationAddressCopyButton />
    </div>
  );
}
