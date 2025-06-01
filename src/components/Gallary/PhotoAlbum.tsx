import PhotoAlbumComponent from "react-photo-album";

export default function PhotoAlbum() {
  const photos = [
    {
      src: "/images/gallary/1.png",
      width: 100,
      height: 100,
    },
  ];
  return <PhotoAlbumComponent photos={photos} layout="columns" />;
}
