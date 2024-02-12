import { TakeTestButton } from 'entities/buttons';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';
import welcome from './welcome.png'

export const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.wrapper}>
        <h1 className={fonts.heading}>Найди подходящий курс</h1>
        <span className={fonts.textLarge}>Мы — агрегатор-отзовик курсов. Выбирайте курсы по стоимости, длительности, дате начала и другим параметрам!</span>
        <TakeTestButton onClick={() => { }} href='#' >Пройти тест</TakeTestButton>
      </div>
      <img className={style.img} src={welcome} />
    </div>
  )
};
