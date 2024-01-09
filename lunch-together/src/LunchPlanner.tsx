import styles from './LunchPlanner.module.scss';
import PokemonPicker from './PokemonPicker';
import { useState } from 'react';
import PokemonImageButton from './PokemonImageButton';
import { useLocalStorage } from 'usehooks-ts';

/* eslint-disable-next-line */
export interface LunchPlannerProps {}

const cleanSeats = [0,0,0,0,0];

export function LunchPlanner(props: LunchPlannerProps) {
  const [lunches, setLunches] = useLocalStorage<number[][]>('Lunches', [] )
  const [opened, setOpened] = useState(false);
  const [seat, setSeat] = useState(0);
  const [selected, setSelected] = useState<number[]>(cleanSeats);
  const selectOnSeat = (id:number, seat:number)=>{ const seats = [...selected]; seats[seat]= id; setSelected(seats); }
  const open = (n:number)=> { setSeat(n); setOpened(true) };
  const coffeeTime = ()=>{
    setLunches([...lunches, selected]);
    setSelected(cleanSeats)
  }
  return (
    <div className={styles['container']}>
      <h1>Pick 3-5 collegues for uncomming lunch</h1>
      <section>
        <PokemonImageButton id={selected[0]} onSelect={(id)=>open(0)}></PokemonImageButton>
        <PokemonImageButton id={selected[1]} onSelect={(id)=>open(1)}></PokemonImageButton>
        <PokemonImageButton id={selected[2]} onSelect={(id)=>open(2)}></PokemonImageButton>
        <PokemonImageButton id={selected[3]} onSelect={(id)=>open(3)}></PokemonImageButton>
        <PokemonImageButton id={selected[4]} onSelect={(id)=>open(4)}></PokemonImageButton>
      </section>
      <button onClick={coffeeTime} disabled={selected.filter(id=>id).length<3}>Coffee time</button>
      <dialog open={opened} onClose={()=>setOpened(false)} >
        <form method="dialog" >
          <PokemonPicker seat={seat} onSelected={(id)=> selectOnSeat(id, seat) } id={seat} disabled={selected}/>
          <button >Hide</button>
          <button onClick={()=>selectOnSeat(0, seat) }>Unselect</button>
        </form>
      </dialog>
      <hr/>
    </div>
  );
}

export default LunchPlanner;
