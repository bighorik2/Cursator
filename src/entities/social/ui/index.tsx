import style from './style.module.css';

interface SocialLinkProps {
  src?: string;
  href?: string;
  color: string;
}

export const SocialLink = ({ src, href, color }: SocialLinkProps) => {
  return (
    <a target='_blank' className={style.social} href={href} style={{ background: color }}>
      <img src={src}></img>
    </a>
  )
};

