import * as fileUpload from "express-fileupload";
import File from "../_entities/File";

/**
 * @author domutala
 */
export default async (file: fileUpload.UploadedFile) => {
  const _file = new File();
  _file.type = file.mimetype;
  _file.name = file.name;
  _file.value = file.data.toString("base64");

  await _file.save();

  return _file;
};
