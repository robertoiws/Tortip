const prod = {
  url: {
    API_URL: "https://tortiback.azurewebsites.net",
  },
};

const dev = {
  url: {
    API_URL: "https://tortiback.azurewebsites.net",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
