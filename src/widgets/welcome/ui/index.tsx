import { TakeTestButton } from 'entities/buttons';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

export const Welcome = () => {
  return (
    <div className={style.Welcome}>
      <div className={style.wrapper}>
        <h1 className={fonts.heading}>Найди подходящий курс</h1>
        <span className={fonts.textLarge}>Мы — агрегатор-отзовик курсов. Выбирайте курсы по стоимости, длительности, дате начала и другим параметрам!</span>
        <TakeTestButton onClick={() => { }} >Пройти тест</TakeTestButton>
      </div>
    </div>
  )
};
