# Flask API

A robust and scalable Flask-based REST API that provides real-time datetime information and health check monitoring. This project includes Docker support for containerized deployment, as well as unit tests for reliability.


## Technologies Used
- Flask - Web framework for building lightweight applications
- Flask-CORS - Handling Cross-Origin Resource Sharing (CORS)
- Docker - Containerization for consistent environments
- Pytest - Testing framework for unit tests


## Install the dependencies:
    pip install -r requirements.txt

## Running the Application

<p>Run the Flask application locally:</p>
    
    python app.py
    
By default, the application will run on `http://0.0.0.0:5000`.

## API Endpoints

Method    ------------  Endpoint     ------------   Description

GET    ------------     /       ------------        Returns current UTC time

GET    ------------     /ping      ------------     Healthcheck endpoint

## Sample Response

    {
        "now": "2025-05-09T12:34:56.789Z",
        "api": "flask"
    }


## Docker Setup

<p>To build and run the application with Docker:</p>

    
    docker build -t flask-api .
    docker run -p 5000:5000 flask-api
    

The API will be accessible at `http://localhost:5000`.

## Testing

<p> Run tests with: </p>

    
    pytest
    

## Environment Variables

Variable   ------------  Description     ------------        Default

PORT    ------------    Port to run the app   ------------  5000

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
