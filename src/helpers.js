export const checkLength = (label) => {
  const words = label.split(" ");
  return `${words.slice(0, 3).join(" ")}...`;
};
