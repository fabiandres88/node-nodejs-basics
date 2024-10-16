import path from "path";
import { chdir, cwd } from "process";
import { existsSync } from "fs";
import {
  ALLOWED_COMMANDS,
  messages,
} from "../constants/fileManagerConstants.js";
const { CURRENT_DIRECTORY_MESSAGE } = messages;

export const changeDirectory = (directory = "") => {
  //   const filteredDirectory = command.replace(ALLOWED_COMMANDS.CD, "").trim();

  const newDir = path.isAbsolute(directory)
    ? directory
    : path.join(cwd(), directory);

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
