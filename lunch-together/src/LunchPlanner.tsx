import styles from './LunchPlanner.module.scss';

/* eslint-disable-next-line */
export interface LunchPlannerProps {}

export function LunchPlanner(props: LunchPlannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LunchPlanner!</h1>
    </div>
  );
}

export default LunchPlanner;
