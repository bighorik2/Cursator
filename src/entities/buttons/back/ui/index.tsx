import React from "react";
import backArrow from 'shared/assets/backArrow.svg';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton = ({ children, onClick }: React.PropsWithChildren<BackButtonProps>) => {
  return (
    <div className={style.back} onClick={onClick}>
      <img src={backArrow} />
      <span className={fonts.linkTextNorm}>{children}</span>
    </div>
  )
};


