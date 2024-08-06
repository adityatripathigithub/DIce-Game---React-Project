import React from 'react'



const StartGame = ({toggle}) => {
    return (
        <container className="flex">
            <div className='pt-40 px-5' >
                <img src="/images/dices.png" />
            </div>

            <div className='mx-auto my-auto' >
                <h1 className='text-8xl font-bold'> Dice Game</h1>
                <button onClick={toggle}  className='w-[50%] mt-5 mx-[50%] p-1 bg-black text-white hover:'>Play Now</button>
            </div>

        </container>
    )
}

export default StartGame