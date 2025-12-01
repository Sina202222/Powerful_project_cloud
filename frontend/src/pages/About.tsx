import React from 'react'

const About: React.FC = () => {
    return(
        <div className='min-h-screen bg-gray-100 flex-items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-green-600 mb-4'>درباره ما</h1>
                <p className='text-lg text-gray-700'>
                    این صفحه اطلاعات در باره ما را نمایش می دهد
                </p>
            </div>
        </div>
    )
}
export default About