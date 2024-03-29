// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import LunchPlanner from '../LunchPlanner';

export function App() {
  return (
    <div>
      <LunchPlanner/>
      {/*<NxWelcome title="lunch-together" />*/}
      <div className="card">
        <h1>Is it real app? </h1>
        <p> No, this is an interview exercise following <a
          href="https://gist.github.com/sarmadbokhari/7c9faf046165375ffeefd8050a1f44dc">Coding challenge</a>
          published on GitHub as <a
            href="https://github.com/sashafirsov/LunchTime-polymer3">LunchTime-polymer3</a> project.
        </p>
        <a href="https://cdn.xml4jquery.com/ajax/libs/LunchTime-polymer3/build/es5-bundled/">Check it live!</a>

        <h3>Essence from requirements</h3>
        <p>As a user, you should be able to be matched with:</p>
        <ol>
          <li>someone random to go get coffee
            <ul>
              <li>Don't allow matching with someone you've already gotten coffee with (so you can find out
                what everyone's favorite coffee is)
              </li>
            </ul>
          </li>
          <li>a random group to go eat lunch
            <ul>
              <li>No lunch group should be fewer than 3 people (the conversation dies easily) or greater
                than 5 (it's hard to get a table)
              </li>
              <li>The group generating algorithm should prioritize people you haven't had lunch with
                before (spice it up!)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
