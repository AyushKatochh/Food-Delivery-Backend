# Express API for Food Delivery App

## Project Overview

This Express-based API serves as the backend for a simple food delivery application. It supports CRUD operations and is extensively documented with Swagger for ease of use. The API's primary functions include managing organization data and calculating delivery costs based on various parameters such as item type, zone, and distance.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or newer)
- npm (bundled with Node.js)
- MySQL or PostgreSQL database (Prisma ORM is used, which supports these databases)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Database Setup**
    - Create a `.env` file in the root directory and specify your database URL:
        ```
        DATABASE_URL="your_database_connection_string"
        ```
    - Apply Prisma migrations:
        ```bash
        npx prisma migrate dev
        ```

4. **Start the Server**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:3000`.

5. **Access Swagger Documentation**
    Open `http://localhost:3000/api-docs` in your browser to explore the API using Swagger UI.

## Project Structure

- `index.js`: Entry point that sets up the Express server, middleware, routes, and Swagger documentation.
- `routes/`: Contains route definitions.
  - `organizationRoutes.js`: Routes related to organizations.
  - `deliveryRoutes.js`: Routes for delivery cost calculations.
- `controllers/`: Contains controller logic.
  - `organizationController.js`: Logic for organization-related operations.
  - `deliveryController.js`: Logic for calculating delivery costs.
- `prisma/`: Prisma ORM configuration and schema definitions.
- `swaggerOptions.js`: Configuration for Swagger documentation.
- `swaggerComponents.js`: Swagger component schemas for API documentation.

## How It Works

### Organizations

- **Get All Organizations**: Fetches and returns all organizations from the database. Accessed via GET `/organizations`.

### Delivery Calculations

- **Calculate Delivery**: Calculates delivery cost based on zone, organization ID, total distance, and item type. Accessed via POST `/calculate-delivery`.

### Swagger Documentation

- Documentation is automatically generated from JSDoc comments above route handlers and in `swaggerComponents.js`, offering an interactive UI for direct API testing.

## Development

- To add routes, define them in `routes/` and import in `index.js`.
- For new controllers, create them in `controllers/` and reference in route definitions.
- Update the database schema in `prisma/schema.prisma` and apply with `npx prisma migrate dev`.
- For Swagger docs updates, adjust JSDoc comments in route handlers or `swaggerComponents.js`.

## Contributing

Contributions are welcome! Feel free to submit pull requests or create issues for bugs or enhancements.

## License

This project is open-sourced under the [MIT License](LICENSE).
