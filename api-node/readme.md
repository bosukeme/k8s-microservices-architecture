# Express TypeScript API

A robust and scalable Express-based REST API built with TypeScript, providing real-time datetime information and health check monitoring. This project includes Docker support for containerized deployment, as well as unit tests for reliability.

## Technologies Used
- Express - Web framework for building REST APIs
- TypeScript - Static type checking
- CORS - Handling Cross-Origin Resource Sharing
- Docker - Containerization for consistent environments
- Jest - Testing framework for unit tests


## Install the dependencies:

    npm install

## Running the Application

    npm run dev

By default, the application will run on `http://localhost:3000`.

## API Endpoints

Method    ------------  Endpoint     ------------   Description

GET    ------------     /       ------------        Returns current UTC time

GET    ------------     /ping      ------------     Healthcheck endpoint

## Sample Response

    {
        "now": "Fri, 09 May 2025 12:34:56 GMT",
        "api": "node"
    }

## Docker Setup

    docker build -t express-ts-api .
    docker run -p 5000:5000 express-ts-api

The API will be accessible at `http://localhost:3000`.

## Testing

    npm run test

## Environment Variables

Variable   ------------  Description     ------------        Default

PORT    ------------    Port to run the app   ------------  3000

## Contributing

If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson

- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
