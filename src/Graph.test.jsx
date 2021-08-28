import { render } from '@testing-library/react';
import Graph from './Graph';

test('renders learn react link', () => {
  render(<Graph graphData={{}}/>);
  expect(document.getElementById('graph_container')).toBeDefined();
});
