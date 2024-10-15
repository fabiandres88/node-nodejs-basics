import {
  ALLOWED_COMMANDS,
  messages,
} from "../constants/fileManagerConstants.js";
import { changeDirectory } from "./changeDirectory.js";
import { goUpperFolder } from "./goUppperFolder.js";
import { listFilesAndFolders } from "./listFilesAndFolders.js";
import { cwd } from "process";

const { EXIT_MESAGE } = messages;

export const handleOperations = (command = "", userName) => {
  const exitMesage = EXIT_MESAGE.replace("userName", userName);

  switch (command) {
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

    default:
      changeDirectory(command);
      break;
  }
};

// cp path_to_file path_to_new_directory
// mv path_to_file path_to_new_directory
