import React from 'react';

function MainContent() {
    return (
      <div className='main-content'>
        <h1 className='main-content__title'>Fun facts about React</h1>
        <ul className='main-content__menu'>
          <li className='main-content__items'>Was first released in 2013</li>
          <li className='main-content__items'>Was originally created by Jordan Walk</li>
          <li className='main-content__items'>Has well over 100K stars on Github</li>
          <li className='main-content__items'>Is maintained by Facebook</li>
          <li className='main-content__items'>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    );
  }

  export default MainContent;