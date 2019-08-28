import * as App from "./src/App";

for (let key of Object.keys(App)) {
  console.log(key);
  if (typeof App[key] == "function") {
    window[key] = App[key];
  }
}