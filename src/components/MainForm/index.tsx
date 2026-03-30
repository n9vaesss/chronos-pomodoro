import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';

import styles from './style.module.css';

export function MainForm() {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          placeholder='Type Something'
          labelText='task'
          id='meuInput'
          type='text'
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
