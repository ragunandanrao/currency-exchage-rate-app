import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to USD and EUR exchange rate calculator')).toBeDefined();
});