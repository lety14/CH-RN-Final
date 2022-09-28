export const formatDate = (time: number) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};
