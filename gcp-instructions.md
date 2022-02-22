# Notes on Deployment to GCP

These steps describe how to deploy an application to GCP using GCP App Engine. We assume that the overall application mirrors our architecture - with separate applications for the frontend and backend.

## Step 0: Set up your GCP account
1. Go to the GCP website and log in using your Google account. **You will need to use a non-CMU account for this in order to have the permissions needed to create new projects.** 
2. Set up your billing in order to allow yourself to deploy by navigating to the "Billing" section.

## Step 1: Set up the GCP SDK and your GCP projects
1. Download the GCP SDK for your local machine.
2. Navigate to the App Engine page in the GCP console in your browser and create two new projects - one for the frontend and one for the backend. 

## Step 2: Deploy your backend application
1. Change directories locally so that you are in your backend app folder.
2. Create a new file in this folder called `app.yaml`. Place the following contents inside.

```yaml
runtime: custom
env: flex
manual_scaling:
  instances: 1
resources:
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10
```

3. Go to your `src/index.ts` and change it so that your application runs on port `8080`. This is required for GCP to deploy properly.
4. Go to your `Dockerfile` for the backend application. Change the first line so that it now says the following. We are replacing the Node.js runtime image that we intiially pulled from Docker Hub to a pre-approved runtime image that GCP App Engine provides.

```docker
FROM gcr.io/google-appengine/nodejs
```

5. Go to your terminal, and ensure that you are still in the backend app folder. Run `gcloud init`, select re-initialize if prompted, and follow the steps. You will be asked to select your account and your desired project.
6. Run `gcloud app deploy` and follow any given prompts. This will deploy your application. Note that this command will take a while to run.
7. Once your backend app has been deployed, run `gcloud app browse`. This will take you to the deployed backend app in your browser, with the URL that it has been assigned. Save this URL for your deployed backend application, as you will need it for your frontend deployment.

## Step 3: Deploy your frontend application
1. Change directories locally so that you are in your frontend app folder.
2. Change the `package.json` so that it has the following value for the `proxy` parameter. This will update your frontend application so that it pulls data from the deployed backend API.
```json
"proxy": "https://<URL FOR YOUR DEPLOYED BACKEND APP>"
```
3. Create a new file in this folder called `app.yaml`. Place the following contents inside.

```yaml
runtime: custom
env: flex
manual_scaling:
  instances: 1
resources:
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10
```

4. Go to your `Dockerfile` for the backend application. Change the first line so that it now says the following. We are replacing the Node.js runtime image that we intiially pulled from Docker Hub to a pre-approved runtime image that GCP App Engine provides.

```docker
FROM gcr.io/google-appengine/nodejs
```

5. Go to your terminal, and ensure that you are still in the backend app folder. Run `gcloud init`, select re-initialize if prompted, and follow the steps. You will be asked to select your account and your desired project.
6. Run `gcloud app deploy` and follow any given prompts. This will deploy your application. Note that this command will take a while to run.
7. Once your backend app has been deployed, run `gcloud app browse`. This will take you to the deployed frontend app in your browser, with the URL that it has been assigned.

