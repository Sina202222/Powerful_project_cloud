import React from 'react'

const Home:React.FC = () =>{
    return(
        <div className="min-h-screen bg-gray-100 flex irtems-center justify-center" >
            <div className='text-center'>
                <h1 className='text 4xl font-bold text-blue-600 mb-4'>
                    خوش آمدید به سایت ما
                </h1>
                <p className='text-lg text-gray-700'> این صفحه اصلی است</p>
            </div>
        </div>
    )
}

export default Home