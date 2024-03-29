import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import organizationRoutes from './routes/organizationRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';
import { options as swaggerOptions } from './swaggerOptions.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', organizationRoutes);
app.use('/', deliveryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
