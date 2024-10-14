import { promises } from "fs";

const remove = async () => {
  const errorMessage = "FS operation failed";
  const fileToremove = "./src/fs/files/fileToRemove.txt";

  try {
    await promises.unlink(fileToremove);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await remove();
