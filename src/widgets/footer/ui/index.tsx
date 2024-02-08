import { FacebookLink, OkLink, SkypeLink, TelegramLink, TwitterLink, ViberLink, VkLink, WhatsupLink } from 'features/social';

import DividerHorizontal from 'shared/ui/dividerHorizontal';
import { FooterNav } from 'features/footerNav';
import { ToStart } from 'features/toStart/ui';
import fonts from 'shared/styles/fonts.module.css';
import logo from 'shared/assets/logo.svg';
import style from './style.module.css';

export const Footer = () => {

  return (
    <footer className={style.footer}>
      <div >
        <img className={style.logo} src={logo} />
        <div className={style.social}>
          <TelegramLink />
          <TwitterLink />
          <SkypeLink />
          <OkLink />
          <FacebookLink />
          <VkLink />
          <WhatsupLink />
          <ViberLink />
        </div>
      </div>
      <div>
        <FooterNav />
        <ToStart />
      </div>
      <DividerHorizontal />
      <div>
        <div className={fonts.textPassive3}>© 2021 coursator.online</div>
        <div className={style.additional}>
          <a href='#' className={fonts.textNorm}>Политика конфиденциальности</a>
          <a href='#' className={fonts.textNorm}>Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
};

