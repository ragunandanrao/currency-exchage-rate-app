import { render, screen } from '@testing-library/react';
import Docs from './Docs';

test('renders learn react link', () => {
  render(<Docs />);
  expect(screen.getByText('Welcome to the documentation section')).toBeDefined();
  expect(screen.getByAltText('Architecture diagram')).toBeDefined();
});
