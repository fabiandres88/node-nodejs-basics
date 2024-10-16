import path from "path";
import { cwd } from "process";
import { createReadStream, promises } from "fs";
import { createHash } from "crypto";

import { messages } from "../constants/fileManagerConstants.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION } = messages;

export const hashFile = async (file) => {
  const filerPath = path.join(cwd(), file);

  try {
    await promises.access(filerPath);

    const readStream = createReadStream(filerPath);
    const hash = createHash("sha256");

    readStream.on("error", (error) => {
      console.error(FAILED_OPERATION, error.message);
    });

    readStream.pipe(hash).setEncoding("hex");

    hash.on("data", (chunk) => {
      process.stdout.write(chunk);
    });

    hash.on("end", () => {
      process.stdout.write("\n");
      const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
        "folderPath",
        cwd()
      );
      console.log(currentDirectoryMessage);
    });

    hash.on("error", (error) => {
      console.error(FAILED_OPERATION, error.message);
    });
  } catch (error) {
    console.error(FAILED_OPERATION, error.message);
  }
};
