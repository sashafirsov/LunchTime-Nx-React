import styles from './LunchPlanner.module.scss';
import PokemonPicker from './PokemonPicker';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LunchPlannerProps {}


export function LunchPlanner(props: LunchPlannerProps) {
  const [opened, setOpened] = useState(false);
  const [seat, setSeat] = useState(0);
  const open = (n:number)=> { setSeat(n); setOpened(true) };
  return (
    <div className={styles['container']}>
      <h1>Pick 3-5 collegues for uncomming lunch</h1>
      <button onClick={()=>open(0)}>1</button>
      <button >2</button>
      <button >3</button>
      <button >4</button>
      <button >5</button>
      <dialog open={opened} onClose={()=>setOpened(false)} >
        <form method="dialog" >
          <PokemonPicker seat={seat}/>
          <button autoFocus={true}>OK</button>
        </form>
      </dialog>
    </div>
  );
}

export default LunchPlanner;
