export const fileOrDirectory = (file = "") => {
  return file.includes(".") ? "file" : "directory";
};
