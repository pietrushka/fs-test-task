Setup:
- Navigate to the backend directory: run `cd /be`
- Run `docker-compose -v` in your terminal. If you see a version number, ignore next step  
- Install docker-compose, I suggest [docker-desktop](https://www.docker.com/products/docker-desktop)

How to start the backend:
- Launch services with docker compose: Run `docker compose up`

Docker Compose Services Explained
- mongodb: Launches a MongoDB container and creates a Products database
- mongo-seed: Uses a custom Docker build to seed the Products database with initial data
- api-server: Compiles TypeScript and starts the server, making it accessible on port `3000`

API Routes
- GET `/products/all`: Returns all products
- ALL `/*`: Catches all other routes and returns a 404 status

Todos
- Add unit and integration tests
- Define request and response schemas for API routes
- Implement monitoring and logging solutions
- Develop additional routes for product filtering and sorting
- Share types between the backend and frontend
- Set up environment variables on the frontend
- Enable database authentication for security
- Prepare for multiple environments (development, production, local)