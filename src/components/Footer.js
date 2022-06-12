import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-0 container max-w-3xl mx-auto'>
        {/* Ready to get started? */}
        <div className='w-full py-20'>
            <h3 className='text-center text-3xl text-white'>Ready to get started?</h3>
            <p className='text-2sm text-center py-3 text-white'>Form handling doesn't have to be painful. React Hook Form will help you write less code while achieving better performance.</p>
            <nav className='w-sm border-b-[1px] border-secondary-900'>
                <ul className='text-center flex flex-row gap-8 justify-center py-2'>
                    <li><a href="" className='text-white hover:text-secondary-900 text-sm'>Facebook</a></li>
                    <li><a href="" className='text-white hover:text-secondary-900 text-sm'>Twitter</a></li>
                    <li><a href="" className='text-white hover:text-secondary-900 text-sm'>Stackoverflow</a></li>
                    <li><a href="" className='text-white hover:text-secondary-900 text-sm'>Linkedin</a></li>				
                </ul>
            </nav>
            <p className='text-center py-4 text-sm text-white'>Designed and Built by @NTH_CODE = React Simple Animate</p>
        </div>
    </footer>
  )
}
