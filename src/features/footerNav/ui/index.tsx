import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from 'shared/config';
import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

export const FooterNav = () => {
  return (
    <div className={cn(style.nav)}>
      <Link to={ROUTE_CONSTANTS.ABOUT_US} className={fonts.titleMed}>О нас</Link>
      <Link to={ROUTE_CONSTANTS.CONTACTS} className={fonts.titleMed}>Контакты</Link>
      <Link to={ROUTE_CONSTANTS.REVIEWS} className={fonts.titleMed}>Отзывы о школах</Link>
    </div>
  )
};
