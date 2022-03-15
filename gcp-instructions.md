# Notes on Deployment to GCP

These steps describe how to deploy an application to GCP using GCP App Engine. We assume that the overall application mirrors our architecture - with separate applications for the frontend and backend.

Make sure you have dockerized your application first! If you haven't there are notes in this repository (Docker-Nodes.md) which detail that process.

## Step 0: Set up your GCP account
1. Go to the GCP website and log in using your Google account. **For now, you will need to use a non-CMU account for this in order to have the permissions needed to create new projects.** (We're working on the permissions issue).
2. Set up a Billing Account in order to allow yourself to deploy by navigating to the "Billing" section.

NOTE: the CMU-provided credits seem to require an @andrew.cmu.edu email, which has permission issues as stated above. While you will be able to redeem credits on an @andrew.cmu.edu email, you won't be able to deploy anything because of the permissions. Therefore, please use a non-CMU email to sign up, and redeem the free $300 GCP credits they offer on signup. Here's a [link to how to redeem that](https://cloud.google.com/free/docs/gcp-free-tier/#free-trial).

## Step 1: Set up the GCP SDK and your GCP projects
1. Download the [GCP SDK](https://cloud.google.com/sdk) for your local machine.
2. Navigate to the App Engine page in the GCP console in your browser and create two new projects - one for the frontend and one for the backend. 

## Step 2: Deploy your backend application
1. Change directories locally so that you are in your `backend` app folder.
2. Create a new file called `app.yaml`. Place the following contents inside (this can also be found in GCP Docs).

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

1. Edit your `src/index.ts` to run your application on port `8080`. This is the designated default port for GCP App Engine.
2.In your backend `Dockerfile`, change the first line so that it now says the following. (We are replacing the Node.js runtime image that we intially pulled from Docker Hub to a pre-approved runtime image that GCP App Engine provides.)

```docker
FROM gcr.io/google-appengine/nodejs
```

3. In your terminal, and ensure that you are still in the backend app folder. Run `gcloud init`, select re-initialize (only if prompted), and follow the steps. You will be asked to select your account and your desired project. Make sure to select the **backend GCP project** you created!
4. Run `gcloud app deploy` and follow any given prompts. This will deploy your application. Note that this command will take a while to run.
5. Once your backend app has been deployed, you can run `gcloud app browse` to view the deployed backend app in your browser, with the URL that it has been assigned. Save this URL for your deployed backend application, as you will need it for your frontend deployment.

## Step 3: Deploy your frontend application
1. The process is similar to the backend, with a few changes. Navigate to your `frontend` app folder.
2. Change the `package.json` so that it has the following value for the `proxy` parameter. This will update your frontend application so that it pulls data from the deployed backend API.
```json
"proxy": "https://<DEPLOYED BACKEND APP URL>"
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

5. Go to your terminal, and ensure that you are still in the backend app folder. Run `gcloud init`, similar to the backend process. This time, remember to select the **frontend GCP project**.
6. Run `gcloud app deploy` and follow any given prompts. This will deploy your application. Note that this command will take a while to run.
7. Once your frontend app has been deployed, run `gcloud app browse`. This will take you to the deployed frontend app in your browser, with the URL that it has been assigned.

