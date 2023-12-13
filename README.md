# MicrofrontMonorepo

Messing around with Vite / Nx / Module Federation to demo a monorepo microfrontend architecture.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the app shell in development

```bash
nx serve application-shell
```

The application will be served on http://localhost:4200/

You will see a message telling you the microfrontend has failed to load. To start serving up the microfront end, run the following command in a separate terminal:

```bash
nx preview microfrontend-child
```

This will give you hot reloading for the app shell, but not for the microfrontend child.

### Run the microfrontend in development

```bash
nx serve microfrontend-child
```

The application will be served on http://localhost:4201/

### Next Steps

- Create CI pipeline to build and deploy the microfrontend and app shell to a CDN
- Create an API caching layer to reduce the number of API calls
