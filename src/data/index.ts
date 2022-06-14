import { Connection, createConnection } from "typeorm";
import * as config from "./config";

/**
 * @author
 * domutala
 * @description
 * Cette fonction initialise la base données.
 */
const init = async () => {
  let odb: Connection;

  try {
    const conf = await config.default({
      prod: process.env.NODE_ENV === "production",
      name: "dikowolof",
    });

    odb = await createConnection(conf);
  } catch (err) {
    throw { err };
  }

  return odb;
};

export default { init };
