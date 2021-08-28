import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeDefined();
  expect(screen.getByText('Docs')).toBeDefined();
});
