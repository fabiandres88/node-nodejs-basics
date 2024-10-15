import {
  ALLOWED_COMMANDS,
  messages,
} from "../constants/fileManagerConstants.js";
import { changeDirectory } from "./changeDirectory.js";
import { goUpperFolder } from "./goUppperFolder.js";
import { listFilesAndFolders } from "./listFilesAndFolders.js";
import { cwd } from "process";
import { readFile } from "./readFile.js";
import { createFile } from "./createFile.js";
import { renameFile } from "./renameFile.js";
import { copyFile } from "./copyFile.js";

const { EXIT_MESAGE, INVALID_INPUT_MESSAGE } = messages;

export const handleOperations = (input = "", userName) => {
  const [command, argument, argument2] = input.trim().split(" ");
  const exitMesage = EXIT_MESAGE.replace("userName", userName);

  switch (command) {
    case ALLOWED_COMMANDS.ADD:
      if (argument) {
        createFile(argument);
      }
      break;

    case ALLOWED_COMMANDS.CAT:
      if (argument) {
        readFile(argument);
      }
      break;

    case ALLOWED_COMMANDS.CD:
      if (argument) {
        changeDirectory(argument);
      }
      break;

    case ALLOWED_COMMANDS.CP:
      if (argument && argument2) {
        copyFile(argument, argument2);
      }
      break;

    case ALLOWED_COMMANDS.EXIT:
      console.log(exitMesage);
      process.exit();
      break;

    case ALLOWED_COMMANDS.LS:
      listFilesAndFolders(cwd());
      break;

    case ALLOWED_COMMANDS.UP:
      goUpperFolder(userName);
      break;

    case ALLOWED_COMMANDS.RN:
      if (argument && argument2) {
        renameFile(argument, argument2);
      }
      break;

    default:
      console.log(INVALID_INPUT_MESSAGE);
      break;
  }
};
