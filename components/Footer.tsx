import React from 'react';
import { NextPage } from 'next';
import { footerList1 } from '../utils/constants';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <a href={`/${item}`} key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </a>
    ))}
  </div>
);

const Footer: NextPage = () => (
  <div className='mt-6 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <p className='text-gray-400 text-sm mt-5'>© 2022 TikTik</p>
  </div>
);

export default Footer;
