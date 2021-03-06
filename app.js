const config = require('./utils/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const logger = require('./utils/logger');

logger.info('Connecting to ', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

module.exports = app;
