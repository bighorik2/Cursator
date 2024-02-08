import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';
import toStart from 'shared/assets/toStart.svg';

export const ToStart = () => {
  const ShiftToStart = () => {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={cn(style.toStart)} onClick={ShiftToStart}>
      <span className={fonts.titleMed}>В начало</span>
      <img src={toStart}></img>
    </div>
  )
};
