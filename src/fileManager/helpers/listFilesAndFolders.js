import { promises } from "fs";
import {
  messages,
  PATH_CONTENT_TABLE_COUMS,
} from "../constants/fileManagerConstants.js";
import { mapPathContent } from "./mapPathContent.js";
import { sortPathCotentByType } from "./sortPathContentByType.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION } = messages;

export const listFilesAndFolders = async (folderPath) => {
  const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
    "folderPath",
    folderPath
  );
  try {
    await promises.stat(folderPath);
    const content = await promises.readdir(folderPath);

    const builtData = mapPathContent(content);

    const tableData = sortPathCotentByType(builtData);

    console.log("\n");
    console.table(tableData, PATH_CONTENT_TABLE_COUMS);
    console.log("\n");
    console.log(currentDirectoryMessage);
  } catch (error) {
    console.log(FAILED_OPERATION, error);
  }
};
