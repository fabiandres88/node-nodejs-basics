import { fileOrDirectory } from "./fileOrDirectory.js";

export const mapPathContent = (content) => {
  return content.map((element) => {
    return { Name: element, Type: fileOrDirectory(element) };
  });
};
