const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');



const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/books', require('./routes/books'));

// SwaggerJsdoc
// Scan through the options passed in and return the Swagger Specification object
const options = require('./config/swagger-jsdoc.config');
const specs = swaggerJsdoc(options);

// SwaggerUi Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));   // adds search bar

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.debug(`Server listening on ${PORT}`));


