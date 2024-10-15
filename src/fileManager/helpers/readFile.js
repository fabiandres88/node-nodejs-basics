import path from "path";
import { cwd } from "process";
import { promises } from "fs";
import { messages } from "../constants/fileManagerConstants";
const { FAILED_OPERATION } = messages;

export const readFile = async (file) => {
  const filerPath = path.join(cwd(), file);
  console.log(filerPath);

  try {
    const data = await promises.readFile(filerPath, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.error(FAILED_OPERATION);
  }
};
