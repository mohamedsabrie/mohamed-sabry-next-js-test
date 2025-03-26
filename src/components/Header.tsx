import React from 'react';
import Logo from './ui/Logo';
import SearchIcon from '@assets/search.svg';
import PersonIcon from '@assets/person.svg';
import StarIcon from '@assets/star.svg';
// import CartIcon from '@assets/cart.svg';
import Image from 'next/image';
import Navigation from './Navigation';
import CartIcon from './ui/CartIcon';

function Header() {
  return (
    <header className="flex items-center justify-between py-[70px] container font-poppins text-slate-gray ">
      <Logo size="lg" />
      <Navigation />
      <div className="flex items-center space-x-7">
        <Image src={SearchIcon} alt="search-icon" />
        <Image src={PersonIcon} alt="person-icon" />
        <Image src={StarIcon} alt="star-icon" />
        <CartIcon />
        {/* <Image src={CartIcon} alt="cart-icon" /> */}
      </div>
    </header>
  );
}

export default Header;
