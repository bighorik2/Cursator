import { Link } from 'react-router-dom';
import arrow from 'shared/assets/dropdownArrow.svg';
import cn from 'classnames';
import fonts from 'shared/styles/fonts.module.css';
import pointArrow from 'shared/assets/dropdownPointArrow.svg';
import style from './style.module.css';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { useState } from 'react';
import backArrow from 'shared/assets/backArrow.svg'

const dropdownContent = [
  {
    category: "Программирование", elements: [
      { name: "Программирование 0", id: "P0" },
      { name: "Программирование 1", id: "P1" },
      { name: "Программирование 2", id: "P2" },
      { name: "Программирование 3", id: "P3" },
      { name: "Программирование 4", id: "P4" },
      { name: "Программирование 5", id: "P5" },
      { name: "Программирование 6", id: "P6" },
      { name: "Программирование 7", id: "P7" },
      { name: "Программирование 8", id: "P8" },
      { name: "Программирование 9", id: "P9" },
    ]
  },
  {
    category: "Управление", elements: [
      { name: "Управление 0", id: "M0" },
      { name: "Управление 1", id: "M1" },
      { name: "Управление 2", id: "M2" },
      { name: "Управление 3", id: "M3" },
      { name: "Управление 4", id: "M4" },
      { name: "Управление 5", id: "M5" },
      { name: "Управление 6", id: "M6" },
      { name: "Управление 7", id: "M7" },
      { name: "Управление 8", id: "M8" },
      { name: "Управление 9", id: "M9" },
    ]
  },
  {
    category: "Дизайн", elements: [
      { name: "Дизайн 0", id: "D0" },
      { name: "Дизайн 1", id: "D1" },
      { name: "Дизайн 2", id: "D2" },
      { name: "Дизайн 3", id: "D3" },
      { name: "Дизайн 4", id: "D4" },
      { name: "Дизайн 5", id: "D5" },
      { name: "Дизайн 6", id: "D6" },
      { name: "Дизайн 7", id: "D7" },
      { name: "Дизайн 8", id: "D8" },
      { name: "Дизайн 9", id: "D9" },
    ]
  },
  {
    category: "Маркетинг", elements: [
      { name: "Маркетинг 0", id: "MA0" },
      { name: "Маркетинг 1", id: "MA1" },
      { name: "Маркетинг 2", id: "MA2" },
      { name: "Маркетинг 3", id: "MA3" },
      { name: "Маркетинг 4", id: "MA4" },
      { name: "Маркетинг 5", id: "MA5" },
      { name: "Маркетинг 6", id: "MA6" },
      { name: "Маркетинг 7", id: "MA7" },
      { name: "Маркетинг 8", id: "MA8" },
      { name: "Маркетинг 9", id: "MA9" },
    ]
  },
  {
    category: "Аналитика", elements: [
      { name: "Аналитика 0", id: "A0" },
      { name: "Аналитика 1", id: "A1" },
      { name: "Аналитика 2", id: "A2" },
      { name: "Аналитика 3", id: "A3" },
      { name: "Аналитика 4", id: "A4" },
      { name: "Аналитика 5", id: "A5" },
      { name: "Аналитика 6", id: "A6" },
      { name: "Аналитика 7", id: "A7" },
      { name: "Аналитика 8", id: "A8" },
      { name: "Аналитика 9", id: "A9" },
    ]
  },
  {
    category: "Создание контента", elements: [
      { name: "Создание контента 0", id: "C0" },
      { name: "Создание контента 1", id: "C1" },
      { name: "Создание контента 2", id: "C2" },
      { name: "Создание контента 3", id: "C3" },
      { name: "Создание контента 4", id: "C4" },
      { name: "Создание контента 5", id: "C5" },
    ]
  }]


export const DropdownNav = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [selectedPoint,setSelectedPoint] = useState(-1);
  const [subListIsOpen,setSubListIsOpen] = useState(true);
  const ref = useOutsideClick(() => {setSubListIsOpen(false); setIsOpen(false)})

  return (
    <div ref={ref} className={cn(style.wrapper, isOpen && style.isOpen)}>
      <div className={style.trigger} onClick={() => {setSubListIsOpen(false); setIsOpen(!isOpen)}}>
        <div className={fonts.textNorm}>Все курсы</div>
        <img src={arrow} />
      </div>
      <div className={style.dropdown}>

        <div className={style.dropdownWrapper}>
          <div className={style.list}>
            {dropdownContent.map((e, i) => (
              <div key={i} className={cn(fonts.dropdownPoint, selectedPoint === i && subListIsOpen && style.selected)}
                onClick={() =>{setSelectedPoint(i);  setSubListIsOpen( selectedPoint === i ? !subListIsOpen : true) }}>{e.category}
                <img src={pointArrow} /></div>
            ))}
          </div>
          <div className={cn(style.subList, subListIsOpen && style.isOpen)}>
          <div className={style.back}>
            <img src={backArrow}/>
            <span className={fonts.linkTextNorm}>Назад</span>
             </div>
            {selectedPoint !== -1 && dropdownContent[selectedPoint].elements.map((el, ind) => (
              <Link key={ind} to={el.id} className={fonts.textSmall}>{el.name}</Link>))}
          </div>
        </div>
      </div>
    </div>
  )
}