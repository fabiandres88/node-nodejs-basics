export const sortPathCotentByType = (pathCotent) => {
  return pathCotent.sort((a, b) => {
    if (a.Type < b.Type) {
      return -1;
    }
    if (a.Type > b.Type) {
      return 1;
    }
    return 0;
  });
};
