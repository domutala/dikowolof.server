import data from "../src/data";
import _user from "../src/services/user/_add";
import _word from "../src/services/word/_filter";
import _orthograph from "../src/services/orthograph/_create";

(async () => {
  const db = await data.init();

  try {
    const orthograph = await _word({});
    console.log(orthograph);
  } catch (error) {
    console.log((error as Error).name);
    console.log(error);
  } finally {
    await db.close();
  }
})();
