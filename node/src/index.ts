import { entrypoint } from "./entrypoint";

const DEBUG = false;

try {
  entrypoint();
} catch (error) {
  console.error("Something happened while parsing your request...");

  if (DEBUG) {
    console.error(error);
  }
}
