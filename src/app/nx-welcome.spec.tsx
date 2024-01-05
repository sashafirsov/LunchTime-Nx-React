import { render } from '@testing-library/react';

import NxWelcome from './nx-welcome';

test('primary', async ()=> {
  const { getByText } = render(<NxWelcome title={'World'} />);

  expect(getByText(/Welcome\s+World/gi)).toBeTruthy();
})
test('primaryaa', async ()=> {
  expect(false).toBeTruthy();
})