import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createBrotliCompress } from "zlib";
import { promisify } from "util";
import path from "path";

const pipe = promisify(pipeline);

export const compress = async (originFile, destinationFile) => {
  const inputPath = path.resolve(originFile);
  const outputPath = path.resolve(destinationFile);

  try {
    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);
    const brotliCompress = createBrotliCompress();

    await pipe(readStream, brotliCompress, writeStream);
    console.log("\nFile successfully compressed\n");
  } catch (error) {
    console.error("\nCompression failed:", error.message);
  }
};
