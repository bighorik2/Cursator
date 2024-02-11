import React, { useState } from "react";

import arrow from 'shared/assets/dropdownArrow.svg';
import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

interface BackButtonProps {
  onClick?: () => void;
}

export const SubListTrigger = ({ children, onClick }: React.PropsWithChildren<BackButtonProps>) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={cn(style.trigger, clicked && style.clicked)} onClick={() => { setClicked(!clicked); onClick && onClick() }}>
      <div className={fonts.textNorm}>{children}</div>
      <img src={arrow} />
    </div>
  )
};


