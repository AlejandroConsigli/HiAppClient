import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi App/i);
  expect(linkElement).toBeInTheDocument();
});
