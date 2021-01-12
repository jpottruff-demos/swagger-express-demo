// Swagger Jsdoc 
// see https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'swagger-express-demo',
            version: '0.1.0',
            description: 'A simple CRUD API made with Express and Swagger',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: '',
                url: '',
                email: ''
            },
        },
        servers: [
            {url: 'http://localhost:3000/api'}
        ],
    },
    apis: ["./routes/books.js"],
}

module.exports = options;