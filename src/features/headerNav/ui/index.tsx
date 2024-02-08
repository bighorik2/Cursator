import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from 'shared/config';
import fonts from 'shared/styles/fonts.module.css';
import style from './style.module.css';

interface HeaderNavProps {
  prevElement: React.JSX.Element
}

export const HeaderNav = ({ prevElement }: HeaderNavProps) => (
  <div className={style.nav}>
    {prevElement}
    <Link to={ROUTE_CONSTANTS.TEST} className={fonts.textNorm}>Тест на профессию</Link>
    <Link to={ROUTE_CONSTANTS.PROMO} className={fonts.textNorm}>Акции</Link>
    <Link to={ROUTE_CONSTANTS.REVIEWS} className={fonts.textNorm}>Отзывы</Link>
  </div>
)

