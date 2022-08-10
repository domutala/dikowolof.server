import fileUpload = require("express-fileupload");
import { MFileParams } from "../models/File";
import _add from "../data/add";

export default async (params: fileUpload.UploadedFile, extras?: any) => {
  const _file: MFileParams = {
    type: params.mimetype,
    name: params.name,
    data: params.data.toString("base64"),
    extras,
  };

  const file = await _add(_file);

  return file.id;
};
