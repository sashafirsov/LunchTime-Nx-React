import styles from './PokemonPicker.module.scss';
import PokemonImageButton from './PokemonImageButton';
import { useLocalStorage } from 'usehooks-ts';

/* eslint-disable-next-line */
export interface PokemonPickerProps {
  id: number;
  seat: number;
  disabled: number[];
  onSelected: (id:number)=>void;
}

const pokemonsList: number[] = [];
for (let i = 1; i < 650; i++)
  pokemonsList.push(i);

export function PokemonPicker(props: PokemonPickerProps) {
  const [lunches] = useLocalStorage<number[][]>('Lunches', [] )
  const idList = [...pokemonsList];
  const moved: Map<number, number>  = new Map();

  for( let lunch of lunches)
    for( let seat of lunch){
      if(  moved.has(seat) ){
        idList[ moved.get(seat) || 0 ] = 0;
      }else {
        idList[seat - 1] = 0;
      }
      moved.set(seat, idList.length)
      idList.push(seat);
    }

  const isDissabled = (id:number)=> props.disabled.includes(id);
  return (
    <div className={styles['container']}>
      <h1> Choose someone for seat {props.seat + 1} </h1>
      <nav>
        { idList.filter(id=>id).map(p => <PokemonImageButton id={p} onSelect={(id: number) => props.onSelected(id)} disabled={isDissabled(p)}/>) }
      </nav>
    </div>
  );
}

export default PokemonPicker;
