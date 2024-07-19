export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const options = { weekday: "short", day: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
};
