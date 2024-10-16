import path from "path";
import { cwd } from "process";
import { promises } from "fs";
import { messages } from "../constants/fileManagerConstants.js";
const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION } = messages;

export const removedFile = async (file) => {
  const filerPath = path.join(cwd(), file);

  try {
    await promises.unlink(filerPath);
    console.log(`\nFile was removed\n`);

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } catch (error) {
    console.error(FAILED_OPERATION);
  }
};
