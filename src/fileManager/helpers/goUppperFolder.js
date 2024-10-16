import path from "path";
import { platform } from "os";
import { cwd, chdir } from "process";
import { messages } from "../constants/fileManagerConstants.js";

const { CURRENT_DIRECTORY_MESSAGE } = messages;
const root = platform() === "win32" ? path.parse(cwd()).root : "/";

export const goUpperFolder = (userName) => {
  const currentDir = cwd();

  if (currentDir !== root) {
    const parentDir = path.dirname(currentDir);
    chdir(parentDir);

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } else {
    console.log(`${userName} you are already at root, cannot go up.`);
  }
};
