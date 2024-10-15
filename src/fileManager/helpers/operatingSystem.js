import os from "os";
import {
  CPUS_TABLE_COLUMNS,
  OS_ARGUMENTS,
} from "../constants/fileManagerConstants.js";

export const operatingSystem = (argument) => {
  switch (argument) {
    case OS_ARGUMENTS.EOL:
      console.log(`\nEnd-Of-Line: ${JSON.stringify(os.EOL)}\n`);
      break;

    case OS_ARGUMENTS.CPUS:
      const cpus = os.cpus();
      console.log(`\nNumber of CPUs: ${cpus.length}\n`);
      const cpusData = cpus.map((cpu, index) => {
        return {
          Model: cpu.model,
          Speed: `${(cpu.speed / 1000).toFixed(2)} GHz`,
        };
      });

      console.table(cpusData, CPUS_TABLE_COLUMNS);
      console.log("\n");
      break;

    case OS_ARGUMENTS.HOME_DIR:
      console.log(`\nHome Directory: ${os.homedir()}\n`);
      break;

    case OS_ARGUMENTS.USER_NAME:
      const username = os.userInfo().username;
      console.log(`\nUsername: ${username}\n`);
      break;

    case OS_ARGUMENTS.ARCHITECTURE:
      console.log(`\nCPU Architecture: ${os.arch()}\n`);
      break;

    default:
      break;
  }
};
