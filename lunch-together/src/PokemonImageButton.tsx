import styles from './PokemonImageButton.module.scss';

export interface PokemonImageButtonProps {
  id: number;
  onSelect: (id: number) => void;
  disabled?: boolean;
}

export function PokemonImageButton(props: PokemonImageButtonProps) {
  const { id, disabled } = props;
  return (
    <button className={styles['container']} onClick={() => props.onSelect(id)} disabled={disabled}>
      {id ?
        <img height="32" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
             alt={ '' } /> : ''
      }
      <br />
      {'' + id}
    </button>
  );
}

export default PokemonImageButton;
