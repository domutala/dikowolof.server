import { MFileParams } from "../models/File";
import File from "./_entities/File";
import _get from "./getOrFaild";

/**
 * @author domutala
 */
export default async (params: MFileParams) => {
  const file = new File();
  file.params = params;

  await file.save();

  return await _get({ id: file.id.toString() });
};
