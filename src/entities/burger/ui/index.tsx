import style from './style.module.css';
import cn from 'classnames'
interface BurgerButtonProps {
  clicked:boolean;
  onCLick:()=>void
}

export const BurgerButton = ({ clicked,onCLick }: BurgerButtonProps) => {
  return (
    <div className={cn(style.hamburger,clicked&&style.isOpen)}
     onClick={onCLick}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
    </div>
  )
};

