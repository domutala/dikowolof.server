import * as server from "./server";
import * as controllers from "./controllers";
import data from "./data";

import * as firbase from "@/utils/firebase";

(async () => {
  try {
    await data.init();
    firbase.init();

    const _server = await server.init();
    await controllers.init(_server.app);
  } catch (error) {
    console.log(error);
  }
})();
