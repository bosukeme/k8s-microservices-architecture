# Kubernetes (K8s) Setup

A complete Kubernetes (K8s) setup for deploying a Flask API, a Node.js API, and a React frontend. This configuration includes Deployments, Services, and Ingress for efficient management and routing within the cluster.

## Technologies Used

- Kubernetes - Container orchestration platform
- Kubectl - Command-line tool for interacting with Kubernetes clusters
- Minikube - Local Kubernetes cluster
- Flask - Python-based micro web framework
- Express (Node.js) - Backend framework for APIs
- React - Frontend library for building user interfaces

## Kubernetes Concepts

### Pods

A Pod is the smallest execution unit in Kubernetes. It encapsulates one or more containers that share storage and network resources. Each Pod is assigned a unique IP address within the cluster.

### Deployments

A Deployment manages the creation and scaling of Pods. It ensures the specified number of Pods are running and automatically replaces failed ones.

### Services

A Service exposes a set of Pods as a network service. It enables communication between different components or external access to Pods.

### Ingress

Ingress manages external access to services in a cluster. It provides load balancing, SSL termination, and name-based virtual hosting.

## Minikube Setup

Minikube is a tool that runs a local Kubernetes cluster. It is ideal for development and testing.

### Install Minikube:

    brew install minikube # For macOS
    sudo apt-get install -y minikube # For Ubuntu
    choco install minikube # For Windows

### Start Minikube:

    minikube start

### Enable Ingress:

    minikube addons enable ingress

### Access Minikube Dashboard:

    minikube dashboard


## Applying Manifests

To deploy the applications, run:

    kubectl apply -f k8s/api-flask/
    kubectl apply -f k8s/api-node/
    kubectl apply -f k8s/client-react/

## Verify the resources:

    kubectl get pods
    kubectl get services
    kubectl get ingress

## Important Commands

| Command                                 | Description                                    |
| :-------------------------------------- | :---------------------------------------------:| 
| kubectl get pods                        |   List all Pods                                |
| kubectl get services                    |   List all Services                            |
| kubectl get deployments                 |   List all Deployments                         |
| kubectl get ingress                     |   List all Ingresses                           |
| kubectl logs <pod-name>                 |   View logs for a specific Pod                 |
| kubectl delete -f <file.yaml>           |   Delete resources defined in the YAML file    |
| kubectl describe pod <pod-name>         |   Get detailed information about a Pod         |
| minikube service <service-name> --url   |   Access a Service exposed by Minikube         |


## Testing and Accessing Services

To access services, you can use:

    minikube service api-flask-service --url
    minikube service api-node-service --url
    minikube service client-react-service --url

    minikube service list # to list all the services


For Ingress, add the Minikube IP to your `/etc/hosts` file:

    sudo nano /etc/hosts

    # Add this line
    <minikube-ip> api-flask.io api-node.io client-react.io

Now, you can access the applications:

Flask API → `http://api-flask.io`

Node API → `http://api-node.io`

React App → `http://client-react.io`

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
