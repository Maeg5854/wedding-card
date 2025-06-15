import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/config";

export class ImageRepository {
  private static instance: ImageRepository;
  private static storage = storage;

  private constructor() {}

  public static getInstance(): ImageRepository {
    if (!ImageRepository.instance) {
      ImageRepository.instance = new ImageRepository();
    }
    return ImageRepository.instance;
  }

  public async getCover(): Promise<string> {
    const url = await getDownloadURL(
      ref(
        storage,
        `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_PREFIX}/cover.jpg`
      )
    );
    return url;
  }
}
