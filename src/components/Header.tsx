import React from "react";
import Logo from "./ui/Logo";
import SearchIcon from "@assets/search.svg";
import PersonIcon from "@assets/person.svg";
import StarIcon from "@assets/star.svg";
// import CartIcon from '@assets/cart.svg';
import Image from "next/image";
import Navigation from "./Navigation";
import CartIcon from "./ui/CartIcon";

function Header() {
  return (
    <header className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row items-center justify-between py-[70px] container font-poppins text-slate-gray ">
      <Logo size="lg" />
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex items-center space-x-7">
        <Image
          src={SearchIcon}
          alt="search-icon"
          width={18}
          height={18}
          className="w-[18px] h-[18px]"
        />
        <Image
          src={PersonIcon}
          alt="person-icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <Image
          src={StarIcon}
          alt="star-icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
