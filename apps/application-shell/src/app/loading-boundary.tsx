import React, { Component, Suspense } from 'react';

type LoadingBoundaryProps = {
  children: React.ReactNode;
};

type LoadingBoundaryState = {
  hasError: boolean;
};

export default class LoadingBoundary extends Component<
  LoadingBoundaryProps,
  LoadingBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h4>
        Unable to load the microfrontend. Have you started the server for it
        yet?
      </h4>
    ) : (
      <Suspense fallback="Loading Microfrontend Child">
        {this.props.children}
      </Suspense>
    );
  }
}
