import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import cors from "cors";
import organizationRoutes from './routes/organizationRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';
import { options as swaggerOptions } from './swaggerOptions.js';

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', organizationRoutes);
app.use('/', deliveryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
