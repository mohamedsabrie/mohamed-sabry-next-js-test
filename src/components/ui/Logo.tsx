import React from 'react';

type SizeVariant = 'md' | 'lg';
const LOGO_SIZES: Record<SizeVariant, string> = {
  md: 'text-[32px]',
  lg: 'text-[52px]',
};
function Logo({ size }: { size: 'md' | 'lg' }) {
  return <div className={`text-slate-gray font-volkhov leading-none ${LOGO_SIZES[size]} `}>FASCO</div>;
}

export default Logo;
