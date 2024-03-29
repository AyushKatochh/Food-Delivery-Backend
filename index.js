import express from 'express';
import bodyParser from 'body-parser';
import organizationRoutes from './routes/organizationRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', organizationRoutes);
app.use('/', deliveryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
