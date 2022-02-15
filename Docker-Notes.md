# Notes on Recitation: Docker

Here is some information on Docker: https://www.docker.com/resources/what-container

## Dockerize your app

> Dockerize = bundle your app into one or more images using Docker.

For recitation, we will be creating two Docker images, one for the frontend and one for the backend.

To do this, we need to write the Docker files that Docker will use to build these images.

### Creating Images
1. `cd` into the backend
2. Create a new `Dockerfile` (if one doesn't already exist)
3. Write the contents of the Dockerfile. (See reference code)
4. Build the backend image with `docker build . -t backend:latest`. Make sure you're in the backend folder when you run this!
5. (optional) you can view your Docker images, including your new image, with the command `docker image ls` or through the Docker Desktop app.
6. `cd` into the frontend
7. Create another new `Dockerfile` (if one doesn't already exist)
8. Write the contents of the Dockerfile. (see reference code)
9. Build the frontend image with `docker build . -t frontend:latest`. Again, make sure you're in the correct folder (ie. frontend).

We have successfully created two Docker images, congratulations! 

Now, how do we run them? Using some port-forwarding techniques.
### Running Images (disjoint)
1. `cd` into frontend
2. `docker run -p 3000:3000 frontend:latest`
3. `cd` into backend
4. `docker run -p 3001:3001 backend:latest`

This will run both docker images in separate containers. The backend will be on your computer's `localhost:3001` and the frontend will be on `localhost:3000`.

However, you will find that the backed cannot talk to the frontend, because they are not connected right now. How do we fix this? Using Docker Compose (https://docs.docker.com/compose/).
### Running Images (connected)
1. In the project root folder (above the frontend and backend), create a `docker-compose.yml`
2. Write content into the compose yaml. (See reference code, if confused, reach out to TAs on slack or Office Hours).
3. The frontend image has to know to connect to the backend image's exposed port 3001. In the `frontend`, open up `package.json` and change the `proxy` to be `http://todo-app-backend:3001` (or whatever the backend image is named). (If confused, see reference code)
4. Run `docker-compose up` to start two containers with our images at the same time.

Given the correct configuration, the container that the frontend image is running in can now talk to the backend's container. Now, we can see the frontend pulling information from the backend.
