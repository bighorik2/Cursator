import { Welcome } from 'widgets/welcome';
import style from './style.module.css';
import { CourseDirection } from 'widgets/courseDirection';

export const General = () => {
  return (
    <div className={style.general}>
      <Welcome />
      <CourseDirection/>
    </div>
  )
};
