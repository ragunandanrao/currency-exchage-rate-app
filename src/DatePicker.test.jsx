import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';

test('renders learn react link', () => {
  render(<DatePicker placeholderText='Test date'/>);
  expect(screen.getByPlaceholderText('Test date')).toBeDefined();
});
