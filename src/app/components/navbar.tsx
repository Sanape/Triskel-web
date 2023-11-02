'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/img/logo-triskel limpio.png';
import React, { useState } from 'react';

export default function Navbar() {
  const colors = ['#3cbab0', '#D19C1D', '#85C66A', '#CC5FBD', '#54167A'];
  const [color, setColor] = useState('black');
  const [colorBtn, setColorBtn] = useState('#D19C1D');
  const [prevColor, setPrevColor] = useState('');

  const changeColor = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (prevColor === newColor);
    setPrevColor(newColor);
    setColor(newColor);
  };

  const changeColorBtn = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor == colorBtn);
    setColorBtn(newColor);
  };

  return (
    <nav className="flex items-center justify-between p-6 ">
      <Link href="/" className={'logo'}>
        <Image src={Logo} alt="Logo" width={60} height={60} />
        TiskelTech +CreActivos
      </Link>

      <div className="space-x-4 justify-between flex">
        <div className='links justify-between'>
          <Link
            href="/link1"
            className="link text-black "
            style={{ color: color }}
            onMouseEnter={changeColor}
            onMouseLeave={() => setColor('black')}
          >
            Inicio
          </Link>
          <Link href="/link2" className="link text-black ">
            Nuestra metología
          </Link>
          <Link href="/link3" className="link text-black ">
            Cursos
          </Link>
        </div>
        <Link
          href="/button-link"
          className="btn px-4 py-2 bg-white text-white rounded"
          style={{ backgroundColor: colorBtn }}
          onMouseEnter={changeColorBtn}
          // onMouseLeave={() => setColorBtn('#D19C1D')}
        >
          Contactanos
        </Link>
      </div>
    </nav>
  );
}
