require('dotenv').config();
const express = require('express'); //'эскпортируем экспресс
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler); //Обработка ошибки

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING' });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server live on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
