export default function Version(props) {

   const openInfo = () => {
      props.toggleShowInfo();
   }

   return (
      <p className='p-0 m-0 text-xs text-center'>ESO Alchemy Assistant - last updated: April 17, 2023 -  learn more about this tool <button className='text-blue-500 underline' onClick={openInfo}>here</button></p>
   )
}