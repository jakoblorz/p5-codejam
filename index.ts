import "p5";
import * as Game from "./src/Game";

for (let key of Object.keys(Game)) {
  if (typeof Game[key] == "function") {
    console.log(`Loading Function ${key}`);
    window[key] = Game[key];
  }
}