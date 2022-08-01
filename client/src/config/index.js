import development from "./development.config";
import production from "./production.config";

const mode = import.meta.env.MODE;

const enviroment = {
  development,
  production,
};

let CONFIG;

if (mode === "development") {
  CONFIG = { ...enviroment["development"], mode: "development" };
}

if (mode === "production") {
  CONFIG = { ...enviroment["production"], mode: "production" };
}

export default CONFIG;
