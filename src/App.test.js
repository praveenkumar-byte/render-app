import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy/i);
  expect(linkElement).toBeInTheDocument();
});
