import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createBrotliDecompress } from "zlib";
import { promisify } from "util";
import path from "path";

const pipe = promisify(pipeline);

export const decompress = async (originFile, destinationFile) => {
  const inputPath = path.resolve(originFile);
  const outputPath = path.resolve(destinationFile);

  try {
    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);
    const brotliDecompress = createBrotliDecompress();

    await pipe(readStream, brotliDecompress, writeStream);
    console.log("\nFile successfully decompressed\n");
  } catch (error) {
    console.error("\nDecompression failed:\n", error);
  }
};
