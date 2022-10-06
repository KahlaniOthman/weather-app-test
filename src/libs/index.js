const api = {
  key: "f825344b0cf0672c689378549f9868db",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const fetchWeather = async ({ queryKey }) => {
  let res;
  try {
    res = await fetch(
      `${api.base}weather?q=${queryKey[1]}&units=metric&APPID=${api.key}`
    );
  } catch (error) {
    throw error
  }

  return res.json();
};
