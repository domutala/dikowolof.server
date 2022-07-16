import * as server from "./server";
import * as controllers from "./controllers";
import data from "./data";

(async () => {
  try {
    await data.init();
    const _server = await server.init();
    await controllers.init(_server.app);
  } catch (error) {
    console.log(error);
  }
})();
