"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NavlinksProps {
    href: string
    children : ReactNode
      onClick?: () => void;
}

const Navlinks = ({href , children ,onClick}: NavlinksProps) => {

    const pathName = usePathname()

    const isActive:boolean = pathName === href

    return (
      <Link href={href }  onClick={onClick}

      className={`${isActive ? 'text-[#C2F800] font-semibold' : 'text-[#9CA3AF] font-semibold'}`}
      
      
      >
      
      {children}
      
      </Link>
    );
};

export default Navlinks;