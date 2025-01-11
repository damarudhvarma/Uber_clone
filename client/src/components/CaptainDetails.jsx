import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainDetails = () => {
   
   const {captain} = useContext(CaptainDataContext)


  return (
    <div> <div  className='flex items-center justify-between'>
    <div  className='flex items-center justify-between gap-3'> 
       <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/RuNyZk2ukK3xNZJem27boDGV1EPn8wzFhPiPisj77nI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzk5/LzM2MF9GXzY3NTc4/OTk0M18yMDR3dFh2/YlMxa0JUd2JDNGhO/N2tVSGNtRGN0OVIw/di5qcGc" alt="Captian" />
       <h4 className='text-lg font-semibold capitalize'>{captain.fullname.firstname
          +" "+captain.fullname.lastname}
       </h4>
    </div>
    <div>
      <h4 className='font-medium text-xl'>₹1000</h4>
      <p className='text-sm text-gray-600'>Earned</p>
    </div>
  </div>
  <div className='flex p-4 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
     <div className='text-center'>
      <i className=' text-3xl mb-2 font-thin ri-timer-2-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
      </div>
     <div className='text-center'>
      <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
     </div>
     <div className='text-center'>
      <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-600'>Hours Online</p>
     </div>
  </div></div>
  )
}

export default CaptainDetails