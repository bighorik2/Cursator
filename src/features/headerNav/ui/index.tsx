import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from 'shared/config';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';
import { useState } from 'react';
import cn from 'classnames'
import { BurgerButton } from 'entities/burger';
import DividerHorizontal from 'shared/ui/dividerHorizontal';

interface HeaderNavProps {
  prevElement: React.JSX.Element
}

export const HeaderNav = ({ prevElement }: HeaderNavProps) => {
  const [isOpen,setState] = useState(false)

  return (
  <div className={style.wrapper}>
    <BurgerButton clicked={isOpen} 
    onCLick={()=>setState(!isOpen)}/>
  <div className={cn(style.nav,isOpen&&style.isOpen)}>
    {prevElement}
    <div className={style.navWrapper}>
    <Link to={ROUTE_CONSTANTS.TEST} className={fonts.textNorm}>Тест на профессию</Link>
    <Link to={ROUTE_CONSTANTS.PROMO} className={fonts.textNorm}>Акции</Link>
    <Link to={ROUTE_CONSTANTS.REVIEWS} className={fonts.textNorm}>Отзывы</Link>
 
    </div>
    <DividerHorizontal/>
     </div>
  </div>
  )
}
