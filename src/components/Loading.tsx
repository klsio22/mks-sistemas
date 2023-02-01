import ReactLoading from 'react-loading';

export function Loading() {
  return (
    <div className='flex justify-center items-center h-[650px]'>
      <ReactLoading type={'spin'} color={'#00000'} height={100} width={100} />
    </div>
  );
}
