import { DropdownNav } from 'features/dropdownNav';
import { HeaderNav } from 'features/headerNav';
import logo from 'shared/assets/logo.svg';
import style from './style.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <img src={logo} className={style.logo} />
        <HeaderNav prevElement={<DropdownNav />}></HeaderNav>
      </div>
      <div className={style.breadCrumbs}></div>
    </header>
  )
};
