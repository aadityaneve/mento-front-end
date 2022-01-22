import React from 'react';
import { useState } from 'react';
import {Glogin,Glogout} from '../GoogleOauth/GoogleOauth'
import {useDispatch, useSelector} from 'react-redux'

export function Profile() {
    const {PROFILE} = useSelector((state) => state);
    const [mylearn, setMylearn] = useState(true)
    const [users, setUsers] = useState([
        {
            "id":"1",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Ritesh-Agarwal/ritesh-agarwal-thumbnail.jpg",
            "name": "ALICIA SOUZA",
            "kam": "Illustrator"
        },
        {   "id":"2",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Nitesh-Tiwari/Nitesh-tiwari-thumbnail.jpg",
            "name": "NITESH TIWARI",
            "kam": "Director, Dangal"
        },
        {    "id":"3",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Biswapati-Sarkar/Biswapathi-sarkar-thumbnail.jpg",
            "name": "SIDDHARTH ROY KA",
            "kam": "Film Producer"
        },
        {   "id":"4",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Siddharth-Roy-Kapur/siddhart-roy-kapoor-thumbnail.jpg",
            "name": "BISWAPATI SARKAR",
            "kam": "Director, TVF"
        },
        {    "id":"5",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Alicia-Souza/Alicia-souza-thumbnail.jpg",
            "name": "SAMEER / YASH",
            "kam": "Co-founders, The Bombay"
        },
        {  "id":"6",
            "url": "https://d1tthr7pv14hhy.cloudfront.net/Images/Author/Santoshi-Shetty/Santoshi-shetty-thumbnail.jpg",
            "name": "THOMAS ZACHARIA",
            "kam": "Chef Partner, The Bombay"
        },
    ])
    console.log(PROFILE);

    function cross(id){
        setUsers(users.filter(e => e.id !== id));
    }
    return <div className="pt-20 bg-[url('https://www.mento.co.in/assets/all-topics-bg-c70ac523da68e4c48726cc16261ddb6d5b08a7f43fa4dc0e78f5488466e78514.png')] py-10 bg-repeat-x " style={{ backdropFilter: 'brightness(.1)' }}>
        <div className='my-20'>
            <img src={PROFILE.imageUrl} alt="image" className=" w-32 h-32 border-2 rounded-full mx-auto my-6" />
            <div className=" flex justify-center text-6xl  font-semibold " >
                <h1 className="text-white" > Welcome &nbsp;</h1> <p style={{ color: '#f36f21' }} >{PROFILE.name}! </p>
            </div>
        </div>
        <div className='w-5/6 border bg-white mb-12 mx-auto rounded-lg'>
            <div className='flex ml-16 mt-4' >
                <button onClick={() => { setMylearn(true) }} className='font-bold mr-12 text-gray-400  hover:underline decoration-orange-600 hover:text-black' style={{ textUnderlineOffset: '20.6px', textDecorationThickness: '5px' }} >MY LEARN</button>
                <button onClick={() => { setMylearn(false) }} className='font-bold mr-12 text-gray-400  hover:underline decoration-orange-600 hover:text-black' style={{ textUnderlineOffset: '20.6px', textDecorationThickness: '5px' }} >PROFILE</button>
                <button className='font-bold text-gray-400  hover:underline decoration-orange-600 hover:text-black ' style={{ textUnderlineOffset: '20.6px', textDecorationThickness: '5px' }} >ACCOUNT SETTINGS</button>
            </div>

            <hr className="mt-6" />
            <div>
                {(mylearn) ? <div>
                    <div className='flex ml-16 my-6 font-medium text-2xl'>
                        <p className='text-orange-600'>0 &nbsp;</p>
                        <p>Videos</p>
                    </div>

                </div> : <div className='ml-16 mb-20 font-medium text-2xl' >

                    <div className='flex gap-x-96'>
                        <div className='flex my-6 '>
                            <p className='text-orange-600'>Topics&nbsp;</p>
                            <p>Following</p>
                        </div>
                        <div className='flex my-6 '>
                            <p className='text-orange-600'>My Favorite&nbsp;</p>
                            <p>Videos</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex my-6 '>
                            <p className='text-orange-600'>Influencers&nbsp;</p>
                            <p>Following</p>
                        </div>
                        <div className='flex flex-wrap gap-x-6 gap-y-1 w-2/4'>
                            {users.map((e) => <div className='w-40'>
                                <button onClick={()=>{cross(e.id)}} className='absolute ml-16 p-1  bg-zinc-400 hover:bg-zinc-500 rounded-full text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <img src={e.url} className="w-40 h-40 mt-3 rounded-lg" />
                                <h1 className='font-normal text-lg mt-1 truncate ' >{e.name} </h1>
                                <h2 className="text-base text-gray-600 font-normal truncate " > {e.kam}</h2>
                            </div>)}
                        </div>

                    </div>
                </div>}
            </div>
        </div>
    </div>;
}
