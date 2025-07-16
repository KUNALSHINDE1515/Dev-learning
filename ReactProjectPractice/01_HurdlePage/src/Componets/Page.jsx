import React from 'react'
import SocialIcons from './SocialIcons'

function Page() {
    return (
        
        <>
        
        
        <div className='flex justify-center h-150 m-10 '>
            <div className='w-full'>
                <img src="./images/illustration-mockups.svg" alt="Img" />
            </div>
            <div className='text-start p-1.5 m-2 w-full flex flex-col  items-start'>
                <h1 className='font-bold text-5xl text-amber-50 w-3/4'>Build The Community Your Fans Will Love</h1>
                <p className='w-3/4 mt-5 mb-5 text-amber-50'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.    </p>
                <button className='px-5 py-2 bg-white text-purple-400 rounded-2xl hover:bg-purple-700 hover:text-white'>Register</button>
            </div>
        </div>
            <SocialIcons />
        </>
    )
}

export default Page
