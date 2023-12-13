import { lazy } from 'react';

import LoadingBoundary from './loading-boundary';

const MicrofrontendChild = lazy(() => import('remoteApp/app'));

export function App() {
  return (
    <div>
      <div>Application Shell</div>

      <LoadingBoundary>
        <MicrofrontendChild />
      </LoadingBoundary>
    </div>
  );
}

export default App;
