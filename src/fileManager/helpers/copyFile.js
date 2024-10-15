import path from "path";
import { cwd } from "process";
import { createReadStream, createWriteStream } from "fs";
import { messages } from "../constants/fileManagerConstants.js";

const { CURRENT_DIRECTORY_MESSAGE, FAILED_OPERATION, FILE_WAS_COPIED } =
  messages;

export const copyFile = async (file, newPath) => {
  const filerPath = path.join(cwd(), file);
  const destinationPath = path.join(newPath, file);

  try {
    const readableStream = await createReadStream(filerPath);
    const writableStream = await createWriteStream(destinationPath);

    readableStream.pipe(writableStream);

    readableStream.on("error", (err) => {
      console.error("Error reading the file:", err);
    });

    writableStream.on("error", (err) => {
      console.error("Error writing the file:", err);
    });

    writableStream.on("finish", () => {
      console.log(`File copied to ${destinationPath}`);
    });

    const currentDirectoryMessage = CURRENT_DIRECTORY_MESSAGE.replace(
      "folderPath",
      cwd()
    );

    console.log(currentDirectoryMessage);
  } catch (error) {
    console.error(FAILED_OPERATION);
  }
};
