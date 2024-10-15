import { chdir } from "process";
import { homedir } from "os";
import {
  ALLOWED_COMMANDS,
  dataEncoding,
  messages,
} from "./constants/fileManagerConstants.js";
import { handleOperations } from "./helpers/handleOperations.js";

const {
  CURRENT_DIRECTORY_MESSAGE,
  EXIT_MESAGE,
  INVALID_INPUT_MESSAGE,
  WELCOME_MESSAGE_WITH_NAME,
} = messages;

const USER_NAME = process.argv.at(2).replace("--username=", "");

const homeDirectory = homedir();
chdir(homeDirectory);

const fileManager = () => {
  const welcomeMessage = WELCOME_MESSAGE_WITH_NAME.replace(
    "userName",
    USER_NAME
  );
  const curretDirectory = CURRENT_DIRECTORY_MESSAGE.replace(
    "folderPath",
    homeDirectory
  );
  const exitMesage = EXIT_MESAGE.replace("userName", USER_NAME);

  console.log(welcomeMessage);
  console.log(curretDirectory);

  process.stdin
    .on("data", (data) => {
      const parsedData = data.trim();

      if (
        Object.values(ALLOWED_COMMANDS).includes(parsedData) ||
        parsedData.includes("cd")
      ) {
        handleOperations(parsedData, USER_NAME);
      } else {
        console.log(INVALID_INPUT_MESSAGE);
      }
    })
    .setEncoding(dataEncoding.UTF_8);

  process.on("SIGINT", () => {
    console.log(exitMesage);
    process.exit();
  });
};

fileManager();
