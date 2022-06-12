import React,{useState, useEffect} from 'react'
import bghome from '../assets/bg.jpg'
export default function Home() {
  return (
    <>
         {/* content */}
         <div className='container mt-16 pb-5 mx-auto'>
            <div className='flex flex-row justify-center items-center'>
                <span className='text-white py-2 px-3 text-3xl bg-blue-600 rounded-xl'><i className="fas fa-list-alt"></i></span>
                <h1 className='text-center text-3xl text-white font-semibold py-5 pl-3 font-FjallaOne'>Web Development</h1> 
            </div>
            <p className='text-center text-sm font-FjallaOne p-2 text-white'>Chuyên trang chia sẻ các kiến thức liên quan đến Lập Trình Website và Phát triển Website</p>
            <img src={bghome} className='block mx-auto max-w-4xl mt-5 sm:max-w-full' />
            <ul className='flex flex-row w-80 mx-auto justify-between mt-5 border-white-200/[0.1] border-[1px]'>
                <li className='w-1/2 p-3 text-white text-center'><a href="">Demo</a></li>
                <li className='w-1/2 p-3 bg-black text-white text-center border-l-[1px] border-white-900/[0.1]  transition-all ease-in-out delay-200 hover:bg-secondary-900'><a href="">Get Started<i className="fas fa-caret-right px-2"></i></a></li>
            </ul>
        </div>

        <div className='w-full mx-auto'><span className='text-white text-2xl mx-auto block text-center mt-3 animate-bounce'><i className="fas fa-arrow-alt-circle-down"></i></span></div>
      

        {/* language */}
        <div className='container mx-auto max-w-4xl mt-2 py-10 sm:max-w-full lg:max-w-4xl'>
            <nav>
                <ul className='flex flex-row justify-center flex-wrap'>
                <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-orange-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-html5"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>HTML5</strong>
                       
                        </a>
                    </li>
                  
                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-blue-400 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-css3-alt"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>CSS</strong>
                       
                        </a>
                    </li>
                 
                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-yellow-400 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-js"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>Javascript</strong>
                       
                        </a>
                    </li>
                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-blue-800 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-php"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>PHP</strong>
                       
                        </a>
                    </li>
                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-green-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-node-js"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>NodeJS</strong>
                       
                        </a>
                    </li>
                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-orange-600 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-laravel"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>Laravel</strong>
                       
                        </a>
                    </li>

                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-blue-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-react"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>React</strong>
                       
                        </a>
                    </li>

                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-green-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-vuejs"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>VueJS</strong>
                       
                        </a>
                    </li>

                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-blue-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-docker"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>Docker</strong>
                       
                        </a>
                    </li>

                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-red-400 block mx-auto text-center h-16 hover:animate-spin'><i className="fab fa-java"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>Java</strong>
                       
                        </a>
                    </li>

                    <li className='w-1/6 sm:w-1/4 lg:w-1/6 p-2 my-2'><a href="">
                        <span className='text-5xl text-gray-500 block mx-auto text-center h-16 hover:animate-spin'><i className="fas fa-database"></i></span>
                        <strong className='text-white block text-center text-xl sm:text-2sm lg:text-xl hover:text-secondary-900'>Database</strong>
                       
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        {/* react redux show */}
        <div className='w-full max-w-5xl mx-auto mt-5 sm:px-2 lg:px-0'>
            <h2 className='font-semibold text-center text-2xl text-white py-10 after:w-20 after:h-[2px] after:block after:mx-auto after:bg-secondary-900 after:mt-2 uppercase sm:text-xl lg:2xl'>BUILD A SHOPPING CART WITH REACT + REDUX</h2>
            <div className='w-full relative'>
                <iframe src="https://codesandbox.io/embed/build-a-shopping-cart-with-react-redux-exodg?fontsize=14&hidenavigation=1&theme=dark" className='w-full h-[500px] sm:w-full sm:h-[400px] lg:w-full lg:h-[500px]'></iframe>   
            </div>                                                                                                                                                                                                                                                                           
        </div>
    </>
  )
}
