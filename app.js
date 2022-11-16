const app = require('./src/server.js');
require('dotenv').config();

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on localhost:${PORT}`);
});
