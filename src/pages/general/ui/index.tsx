import { Welcome } from 'widgets/welcome';
import style from './style.module.css';

export const General = () => {
  return (
    <div className={style.general}>
      <Welcome />
    </div>
  )
};
