export default function Info(props) {
   const closeInfo = () => {
      props.toggleShowInfo();
   }

   return (
      <div className='fixed z-50 flex flex-col w-full h-full overflow-auto bg-black/50' onClick={closeInfo}>
         <div className='w-1/2 p-4 m-auto mt-12 text-center bg-white'>
            <p>You clicked to show some information, but I haven&apos;t written it yet. So very sorry to delude you.</p>
         </div>
      </div>
   )
}