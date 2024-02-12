import { TakeTestProps } from "entities/buttons/model/componentModels";
import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

export const TakeTestButton = ({ children, onClick, href }: TakeTestProps) => {

  return (
    <div className={style.wrapper} >
      <div className={cn(style.button, fonts.buttonTextNorm)} onClick={() => { onClick && onClick() }}>{children}</div>
      <div className={fonts.signText}>Не уверены, какую<br /><a href={href} className={fonts.linkTextMini}>профессию</a> выбрать?</div>
    </div>
  )
};


