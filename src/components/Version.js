export default function Version(props) {

   const openInfo = () => {
      props.toggleShowInfo();
   }

   return (
      <p className='p-0 m-0 text-xs text-center'>Version: Update 38 Necrom (7/23) - Need <button className='text-blue-500 underline' onClick={openInfo}>help?</button></p>
   )
}