import path from "path";
import { cwd } from "process";
import { promises } from "fs";
import { messages } from "../constants/fileManagerConstants.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION, FILE_WAS_RENAMED } =
  messages;

export const renameFile = async (file, newFile) => {
  const filerPath = path.join(cwd(), file);
  const nerwFilerPath = path.join(cwd(), newFile);

  try {
    await promises.rename(filerPath, nerwFilerPath);
    console.log(FILE_WAS_RENAMED);

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } catch (error) {
    console.error(FAILED_OPERATION);
  }
};
