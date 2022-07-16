import { Connection, createConnection } from "typeorm";
import config from "@/data/config";

/**
 * @author
 * domutala
 * @description
 * Cette fonction initialise la base données.
 */
const init = async () => {
  let odb: Connection;

  try {
    const name = "wolof";
    const prod = process.env.NODE_ENV !== "development";
    const conf = await config({ prod, name });

    odb = await createConnection(conf);
  } catch (err) {
    throw { err };
  }

  return odb;
};

export default { init };
