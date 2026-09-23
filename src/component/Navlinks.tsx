"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NavlinksProps {
    href: string
    children : ReactNode
}

const Navlinks = ({href , children}: NavlinksProps) => {

    const pathName = usePathname()

    const isActive:boolean = pathName === href

    return (
      <Link href={href}

      className={`${isActive ? 'text-[#C2F800] font-semibold' : 'text-[#9CA3AF] font-semibold'}`}
      
      
      
      
      >
      
      {children}
      
      </Link>
    );
};

export default Navlinks;