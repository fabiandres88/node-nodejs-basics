import { promises } from "fs";
import { messages } from "../constants/fileManagerConstants.js";
import { fileOrDirectory } from "./fileOrDirectory.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION } = messages;

export const listFilesAndFolders = async (folderPath) => {
  try {
    await promises.stat(folderPath);
    const files = await promises.readdir(folderPath);

    const builtData = files.map((file) => {
      return { Name: file, Type: fileOrDirectory(file) };
    });

    console.log("\n");
    console.table(builtData, ["Name", "Type"]);
    console.log("\n");
    console.log(CURRENT_DIRECTORY_MESSAGE.replace("folderPath", folderPath));
  } catch (error) {
    console.log(FAILED_OPERATION);
  }
};
