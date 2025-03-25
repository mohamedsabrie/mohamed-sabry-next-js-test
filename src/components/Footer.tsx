import React from 'react';
import Logo from './ui/Logo';
import Navigation from './Navigation';

function Footer() {
  return (
    <footer className="border-light-gray border-t font-poppins text-slate-gray">
      <div className="container  flex flex-col  gap-y-14 pt-8 pb-10 ">
        <div className="flex items-center justify-between">
          <Logo size="md" />
          <Navigation /> 
        </div>
        <p className='text-center text-xs' >Copyright © 2022 FASCO . All Rights Reseved.</p>
      </div>
    </footer>
  );
}

export default Footer;
