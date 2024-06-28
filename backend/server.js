const mongoose = require('mongoose');
const app = require('./app');
const { mongoURI } = require('./config/config');
const logger = require('./utils/logger');

const port = process.env.PORT || 5000;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => logger.info(`Server running on port ${port}`));
  })
  .catch(err => logger.error(err));
