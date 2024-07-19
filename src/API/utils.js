export const formatTemperature = (temp) => {
  return `${Math.round(temp)}°C`;
};

export const handleApiError = (error) => {
  // Implement error handling logic
  console.error("API Error", error);
};
