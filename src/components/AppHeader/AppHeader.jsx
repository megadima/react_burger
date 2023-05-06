import React from 'react';
import headerStyle from './AppHeader.module.css'
import {Logo,
        BurgerIcon,
        ListIcon,
        ProfileIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
    render() {
      return (
        <header className={ `${headerStyle.header} pt-4 pb-4` }>
          <div className={headerStyle.wrap}>
            <nav className={ headerStyle.nav }>
              <ul className={ `${headerStyle.list} ${headerStyle.nav_side_parts}` }>
                <li>
                  <a href='#constructor' className={ `${headerStyle.link} pt-4 pb-4` }>
                    <div className={ `${headerStyle.icon} ml-5` }>
                      <BurgerIcon type="primary" />
                    </div>
                    <span className={`${ headerStyle.text } text text_type_main-default mr-5`}>Конструктор</span>
                  </a>
                </li>
                <li>
                  <a href='#constructor' className={ `${headerStyle.link} pt-4 pb-4` }>
                    <div className={ `${headerStyle.icon} ml-5` }>
                      <ListIcon type="secondary" />
                    </div>
                    <span className={`${ headerStyle.text } text text_type_main-default text_color_inactive mr-5`}>Лента заказов</span>
                  </a>
                </li>
              </ul>
              <Logo />
              <a href='#constructor' className={ `${headerStyle.link} ${headerStyle.nav_side_parts} ${headerStyle.lk} pt-4 pb-4` }>
                    <div className={ `${headerStyle.icon} ml-5` }>
                      <ProfileIcon type="secondary" />
                    </div>
                    <span className={`${ headerStyle.text } text text_type_main-default text_color_inactive mr-5`}>Личный кабинет</span>
                  </a>
            </nav>
          </div>
        </header>
      );
    }
}

export default AppHeader;
