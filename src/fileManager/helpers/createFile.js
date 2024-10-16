import { promises } from "fs";
import path from "path";
import { cwd } from "process";
import { TEXT_CONTENT, messages } from "../constants/fileManagerConstants.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION, FILE_WAS_CREATED } =
  messages;

export const createFile = async (filePath) => {
  const filerPath = path.join(cwd(), filePath);

  try {
    await promises.writeFile(filerPath, TEXT_CONTENT);
    console.log(FILE_WAS_CREATED);

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } catch (error) {
    console.error(FAILED_OPERATION);
  }
};
