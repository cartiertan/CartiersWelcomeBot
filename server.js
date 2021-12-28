const app = require('express')();

app.get('/', (req, res) => res.send('online'));

module.exports = () => {
  app.listen(5000);
}