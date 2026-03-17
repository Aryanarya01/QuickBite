import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/Cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "foods",
    allowed_formats: ["jpg", "png", "jpeg"],
  }),
});

export const upload = multer({ storage });