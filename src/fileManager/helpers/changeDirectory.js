import path from "path";
import { chdir, cwd } from "process";
import { existsSync } from "fs";
import { messages } from "../constants/fileManagerConstants.js";
const { CURRENT_DIRECTORY_MESSAGE } = messages;

export const changeDirectory = (command = "") => {
  const filteredDirectory = command.replace("cd", "").trim();

  const newDir = path.isAbsolute(filteredDirectory)
    ? filteredDirectory
    : path.join(cwd(), filteredDirectory);

  if (existsSync(newDir)) {
    chdir(newDir);

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } else {
    console.log("Directory does not exist.");
  }
};
