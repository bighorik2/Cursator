import { ButtonProps } from "entities/buttons/model/componentModels";
import arrow from 'shared/assets/dropdownArrow.svg';
import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';
import { useState } from "react";

export const SubListTrigger = ({ children, onClick }: ButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={cn(style.trigger, clicked && style.clicked)} onClick={() => { setClicked(!clicked); onClick && onClick() }}>
      <div className={fonts.textNorm}>{children}</div>
      <img src={arrow} />
    </div>
  )
};


