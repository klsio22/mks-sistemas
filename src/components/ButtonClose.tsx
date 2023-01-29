import { X } from "phosphor-react";

interface Size{
  sizeNumber: number;
}

export function ButtonClose({sizeNumber}:Size) {
  return (
    <span className='bg-black rounded-full'>
      <X size={sizeNumber} color='#ffffff' className='p-1' />
    </span>
  );
}
