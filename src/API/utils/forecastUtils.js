export const processForecastData = (data) => {
  const dailyData = {};

  data.forEach((entry) => {
    const date = new Date(entry.dt * 1000);
    const day = date.toISOString().split("T")[0];

    if (!dailyData[day]) {
      dailyData[day] = {
        date: entry.dt,
        temps: [],
        icons: [],
      };
    }

    dailyData[day].temps.push(entry.main.temp);
    dailyData[day].icons.push(entry.weather[0].icon);
  });

  const dailyForecast = Object.keys(dailyData).map((day) => {
    const dayData = dailyData[day];
    const avgTemp =
      dayData.temps.reduce((sum, temp) => sum + temp, 0) / dayData.temps.length;

    return {
      date: dayData.date,
      temp: avgTemp,
      icon: dayData.icons[0],
    };
  });

  const today = new Date().toISOString().split("T")[0];
  const filteredForecast = dailyForecast.filter((day) => day.date !== today);

  return filteredForecast.slice(0, 5);
};
