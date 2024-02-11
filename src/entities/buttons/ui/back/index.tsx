import { ButtonProps } from "entities/buttons/model/componentModels";
import backArrow from 'shared/assets/backArrow.svg';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

export const BackButton = ({ children, onClick }: ButtonProps) => {
  return (
    <div className={style.back} onClick={() => onClick && onClick()}>
      <img src={backArrow} />
      <span className={fonts.linkTextNorm}>{children}</span>
    </div>
  )
};


