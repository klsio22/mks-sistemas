import { X } from 'phosphor-react';

interface Size {
  sizeNumber: number;
}

export function ButtonClose({ sizeNumber }: Size) {
  return (
    <X
      size={sizeNumber}
      color='#ffffff'
      className='p-1 bg-black rounded-full'
    />
  );
}
