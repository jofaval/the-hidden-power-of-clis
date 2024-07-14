import { entrypoint } from "./entrypoint";

try {
  entrypoint();
} catch (error) {
  console.error("Something happened while parsing your request...");
  console.error(error);
}
