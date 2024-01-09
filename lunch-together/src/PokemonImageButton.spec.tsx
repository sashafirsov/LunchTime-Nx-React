import { render } from '@testing-library/react';

import PokemonImageButton from './PokemonImageButton';

describe('PokemonImageButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonImageButton />);
    expect(baseElement).toBeTruthy();
  });
});
