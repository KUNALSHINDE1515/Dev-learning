import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function SocialIcons() {
    return (
        <div className='flex m-2 justify-end mb-1.5 ml-1.5 absolute bottom-9 right-10 gap-3 text-3xl text-amber-50'>
            <FaFacebookF className='border-2 p-1 rounded-full' />
            <FaTwitter  className='border-2 p-1 rounded-full'/>
            <FaInstagram  className='border-2 p-1 rounded-full'/>
        </div>
    )
}

export default SocialIcons
