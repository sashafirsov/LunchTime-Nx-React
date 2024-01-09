import styles from './PokemonPicker.module.scss';

/* eslint-disable-next-line */
export interface PokemonPickerProps {
  seat:number
}

export function PokemonPicker(props: PokemonPickerProps) {
  return (
    <div className={styles['container']}>
      <h1>Choose someone for seat {props.seat+1} </h1>
    </div>
  );
}

export default PokemonPicker;
