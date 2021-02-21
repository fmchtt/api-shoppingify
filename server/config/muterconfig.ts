import multer, { diskStorage } from "multer";
import { Request } from "express";
import path from "path";

const multerConfig = multer({
  storage: diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req: Request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;

      cb(null, filename);
    },
  }),
});

export default multerConfig;
