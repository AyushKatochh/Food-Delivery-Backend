// swaggerOptions.js
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Food Delivery App',
    version: '1.0.0',
    description: 'This is a simple CRUD API application made with Express and documented with Swagger',
    contact: {
      name: 'Developer',
      email: 'developer@example.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
  ],
};

export const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './swaggerComponents.js'], // Updated to include swaggerComponents.js
};
