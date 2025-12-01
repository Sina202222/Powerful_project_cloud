import React from 'react'

const Contact: React.FC = () => {
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">تماس با ما</h1>
                <p className="text-lg text-gray-700">برای تماس با ما می‌توانید از فرم زیر استفاده کنید.</p>
                <form className='mt-6 space-y-4'>
                    <input type="text" placeholder='نام شما' className='p-2 border rounded w-64'/>
                    <input type="email" placeholder='ایمیل' className='p-2 boarder rounded w-64'/>
                    <textarea placeholder='پیام' className='p-2 boarder rounded w-64 h-32'>
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>ارسال</button>
                    </textarea>
                </form>
            </div>
        </div>

    )
}

export default Contact