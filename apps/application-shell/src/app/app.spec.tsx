import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render header', async () => {
    render(<App />);
    expect(await screen.findByText('Application Shell')).toBeTruthy();
  });
});
