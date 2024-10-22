'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoDark from '../logo/LogoDark';

const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className='site-header site-header--absolute is--white py-3' id='sticky-menu'>
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <LogoDark />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

          <div className='flex items-center gap-6'>


            <div className='block lg:hidden'>
              <button onClick={() => setMobileMenu(true)} className='mobile-menu-trigger is-white'>
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_01;
