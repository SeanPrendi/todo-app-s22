# Deployment and Container Orchestration using Kubernetes
## 17-356 Software Engineering for Startups, Spring 2022

In this course you have been introduced to packaging your code in the form of images using Docker, so that it can be deployed consistently using containers. You have also been briefly exposed to the idea of bridging containers together using Docker Compose so that you can run multiple microservices in separate containers and have them communicate over a shared network. Docker Compose is a simpler tool that addresses the field of container orchestration, which is the design and architecture of cloud-friendly systems that rely on multiple containers that are organized strategically.

Kubernetes is a container orchestration platform maintained by Google that offers more fine-tuned control over managing multiple containers compared to Docker Compose. It can use Docker images (either local or pulled from Docker Hub) and set up containers and networking as specified in YAML files.

We have provided an example of how to deploy the To-Do application using Kubernetes. The files necessary for doing so can be found in the `kubernetes-resources/` folder of this repository. Shell scripts for creating and destroying the resulting Kubernetes resources are also contained in this folder.

For those of you who have Docker on your machines, you can simply activate Kubernetes on your machine as well by following the instructions [here](https://docs.docker.com/desktop/kubernetes/#enable-kubernetes). You must have Kubernetes activated and running for the scripts to work above.

For more info on Kubernetes, the official documentation can be found [here](https://kubernetes.io/docs/home/).


