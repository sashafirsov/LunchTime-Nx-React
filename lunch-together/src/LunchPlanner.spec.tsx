import { render } from '@testing-library/react';

import LunchPlanner from './LunchPlanner';

describe('LunchPlanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LunchPlanner />);
    expect(baseElement).toBeTruthy();
  });
});
