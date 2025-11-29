# Deployment Guide for Netlify

This project is configured for easy deployment on Netlify. Since this is a Single Page Application (SPA) built with Vite and React, we need to ensure that routing works correctly in production.

## Prerequisites

- A [Netlify](https://www.netlify.com/) account.
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket) OR available locally for drag-and-drop.

## Option 1: Deploy via Git (Recommended)

1.  **Push your code** to GitHub, GitLab, or Bitbucket.
2.  Log in to Netlify and click **"Add new site"** > **"Import an existing project"**.
3.  Connect your Git provider and select your repository.
4.  Netlify should automatically detect the settings:
    - **Build command:** `npm run build`
    - **Publish directory:** `dist`
5.  Click **"Deploy site"**.

## Option 2: Drag and Drop (Manual)

1.  Run the build command locally:
    ```bash
    npm run build
    ```
2.  This will create a `dist` folder in your project directory.
3.  Log in to Netlify and go to the **"Sites"** tab.
4.  Drag and drop the `dist` folder onto the drop zone area.

## Important Note on Data

This project uses a local `json-server` for development to simulate a backend API. On Netlify, this local server will **not** be running.

However, the application is designed to **automatically fallback to mock data** if the API is unreachable. This means your deployed site will still work and display content, but any changes you make (like adding a new service via Admin Panel) will only be saved locally in your browser's memory and will reset on refresh.

## Configuration

A `netlify.toml` file has been added to the project root to handle SPA routing (redirecting all requests to `index.html`).

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
