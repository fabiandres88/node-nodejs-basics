import {
  ALLOWED_COMMANDS,
  messages,
} from "../constants/fileManagerConstants.js";
import { listFilesAndFolders } from "./listFilesAndFolders.js";

const { EXIT_MESAGE } = messages;

export const handleOperations = (command = "", folderPath, userName) => {
  const exitMesage = EXIT_MESAGE.replace("userName", userName);

  switch (command) {
    case ALLOWED_COMMANDS.CD:
      console.log(ALLOWED_COMMANDS.CD);
      break;

    case ALLOWED_COMMANDS.EXIT:
      console.log(exitMesage);
      process.exit();
      break;

    case ALLOWED_COMMANDS.LS:
      listFilesAndFolders(folderPath);
      break;

    case ALLOWED_COMMANDS.UP:
      console.log("up");
      break;

    default:
      break;
  }
};

// cp path_to_file path_to_new_directory
// mv path_to_file path_to_new_directory
