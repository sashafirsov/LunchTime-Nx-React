import { render } from '@testing-library/react';

import PokemonPicker from './PokemonPicker';

describe('PokemonPicker', () => {
  it('should render successfully', () => {
    const { baseElement,getByText } = render(<PokemonPicker seat={1}/>);
    expect(baseElement).toBeTruthy();

    expect( getByText('Choose someone for seat 2') ).toBeTruthy();
  });
});
