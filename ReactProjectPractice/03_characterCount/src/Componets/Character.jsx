import React, { useState } from 'react'

function Character() {

    const [text, setText] = useState();
    const [charCount, setCharCount] = useState("0");
    const [sentenceCount, setSentenceCount] = useState("0"); 

    const handleChange = (e) =>{
        const value = e.target.value;

        // calculate karacter count
        const chaaracter = value.replace(/\s+/g, '');
        setCharCount(chaaracter.length);
        
        const sentence = value.trim().split(/[.!?](\s|$)/).filter((s) => s.trim().length > 0);
        
        setSentenceCount(sentence.length);
    }


   const handleDelete  = () =>{
    setText("");
    setCharCount("0");
    setSentenceCount("0");
   }
    return (
        <>
        <div className='flex gap-2 '>
            <div className='w-75 h-75 bg-white rounded text-black'>
                <textarea
                 name="" 
                placeholder='Enter Your Text'
                className='boder-none w-full h-full resize-none focus:outline-none p-2'
                value={text}
                onChange={handleChange}
                ></textarea>
            </div>
            <div className='w-75 h-75 bg-white rounded text-gray-400 text-center p-2'>
                <h1 className='text-3xl mb-2 mt-2'>Result</h1>
                <div className='flex justify-between'>
                    <h1>Character Count <span className='block'>{charCount}</span></h1>
                    <h1>Sentence Count<span className='block'>{sentenceCount}</span></h1>
                    
                </div>
            </div>
        </div>
         <button 
    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-1 rounded mt-5'
    onClick={handleDelete}
    >Delete</button>
        </>
    )
}

export default Character
