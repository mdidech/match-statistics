const axios = require('axios');

const getCurrentMatchs = async () => {
  const result = await axios.get(
    'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    {
      headers: {
        'x-rapidapi-key': 'a599434d40mshee7a71eb58ad856p112941jsnfafa6fa424b0',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      },
      params: {
        live: 'all',
      },
    }
  );
  // console.log(result.data.response);
  return result.data.response;
};

module.exports = { getCurrentMatchs };
