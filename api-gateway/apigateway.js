const express = require('express');
const app = express();
const axios = require('axios').default;
const cors = require('cors');
const servers = require('./registry.json').servers;

app.use(cors());
app.use(express.json());

app.all('/:apis/*', async (req, res) => {
  try {
    const apiName = req.params.apis;
    const apiServer = servers[apiName];
    if (apiServer) {
    //  { '0': 'users/', apis: 'usersapi' }
    //  { '0': 'users/create', apis: 'usersapi' }
      const basePath = req.params[0] || '';
      // http://localhost:3000/users/
      const url = new URL(basePath, apiServer.url).href;
      const result = await axios({
        data: req.body,
        method: req.method,
        headers: req.headers,
        url: url,
      });
      return res.status(result.status).json(result.data);
    } else {
      return res.status(404).json({ message: 'API not found' });
    }
  } catch (e) {
    // Check if the error is an instance of AxiosError and has a response status code
    if (e.isAxiosError && e.response && e.response.status) {
      return res.status(e.response.status).json({ message: e.message });
    } else {
      return res.status(500).json({ message: e.message });
    }
  }
});

app.listen(4000, () => {
  console.log('API Gateway running on port 4000');
});
