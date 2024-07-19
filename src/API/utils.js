export const formatTemperature = (temp) => {
  return `${Math.round(temp)}°C`;
};

export const handleApiError = (error) => {
  console.error("API Error", error);
};
