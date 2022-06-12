import React,{useContext, useEffect, useState} from 'react'
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";
import {MContext} from './UseContext';
export default function Headers(){
  const [menu,setMenu] = useState(false);
  const {categories}  = useContext(MContext);
  const isMenu = ()=>{
      let chon = false;
      if(menu) chon = false
      else chon = true;
      setMenu(chon);
  }
  
   
  
  return (
    <>
        <div className='w-full bg-[#191d3a]'>
            <div className='container w-full sm:max-w-full md:max-w-full lg:container mx-auto flex flex-row items-center justify-end sm:py-2 lg:py-1'>
               <div className='w-1/3 sm:pl-4'>
                   <a href='' className='w-full h-full flex flex-row items-center'>
                       <div className='w-10 shrink-0 relative'>
                           <img src={logo} className='w-10 h-10 rounded-full animate-spin'/>
                           <span className='w-full h-full border-secondary-900 border-[1px] rounded-full absolute top-0 animate-ping  opacity-75'></span>
                       </div>
                       <h2 className='pl-2 text-white text-xl sm:text-sm lg:text-xl'>[NTH_CODE]</h2>
                   </a>
               </div>
               <div className='w-2/3 flex flex-row items-center justify-end'>
                    <div className='w-auto hidden sm:block sm:pr-4 lg:hidden lg:pr-0 active-menu' onClick={()=>isMenu()}><span className="text-white sm:text-2xl sm:w-auto "><i className="fas fa-bars"></i></span></div>
                    <nav className={`list-menu sm:fixed sm:-right-[100%] sm:h-full sm:bg-[#191d3a] transition-all ease-in-out delay-150 sm:snap-y sm:top-0 sm:bg-green sm:p-2 sm:w-1/2 ${menu?"sm:opacity-100 sm:visible showmenu":"sm:opacity-0 sm:invisible"} lg:p-0 lg:w-full lg:relative lg:bg-transparent  lg:opacity-100 lg:visible lg:right-0`}>
                        <div className={`w-auto hidden sm:absolute sm:right-0 sm:pr-2 sm:z-10 lg:hidden ${menu?"sm:block":"hidden"}`} onClick={()=>isMenu()}><span className="text-white sm:text-2xl sm:w-auto "><i className="far fa-times-circle"></i></span></div>
                        <ul className='w-full flex flex-row menu-parent sm:flex-col lg:flex-row lg:justify-end'>
                            <li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><Link to="/home" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>home</Link></li>
                            <li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><Link to="/" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>Program</Link>
                                <ul className='sm:relative sm:bg-transparent w-44 sm:w-full absolute top-[100%] left-0 bg-black rounded-sm menu-child opacity-0 visible transition-all ease-in-out duration-700 sm:opacity-100 sm:visible lg:absolute lg:bg-[#191d3a] lg:opacity-0 lg:invisible lg:w-44'>

                                {
    categories?.length>0 && categories.map(({slug,name,parent_id,id,children_categories})=>{
        return (
            <li className='sm:hover:bg-transparent sm:pl-3 sm:before:content-["+"] sm:before:p-2 sm:text-sm sm:text-white p-2 relative hover:bg-slate-100 group lg:before:content-none'>
                <Link to={slug}  className='text-white group-hover:text-[#bf1650]'>{name}</Link>
                <ul className='w-44 absolute top-0 left-[100%] bg-black rounded-sm menu-child-child opacity-0 visible transition-all ease-in-out duration-700 sm:bg-transparent sm:opacity-100 sm:visible sm:relative sm:left-0 lg:absolute lg:left-[100%] lg:bg-[#191d3a] lg:opacity-0 lg:invisible'>
                {
                   
                   children_categories.length>0 && children_categories.map(item=>{
                        return   <li className='sm:hover:bg-transparent sm:pl-4 sm:before:content-["-"] sm:before:p-2 sm:last:pb-0 sm:text-sm sm:text-white p-2 hover:bg-slate-200 group2 lg:before:content-none lg:last:pb-2'><Link to={item.slug} className='text-white'>{item.name}</Link></li>
                   }) 
                  
                }
                </ul>
            </li>
        )
     })
   }
   

                   
                    
                                    

                                    <li className='sm:hover:bg-transparent sm:pl-3 sm:before:content-["+"] sm:before:p-2 sm:text-sm sm:text-white p-2 relative hover:bg-slate-100 group lg:before:content-none'><a href="" className='text-white group-hover:text-[#bf1650]'>NodeJS</a>
                                        <ul className='w-44 absolute top-0 left-[100%] bg-black rounded-sm menu-child-child opacity-0 visible transition-all ease-in-out duration-700 sm:bg-transparent sm:opacity-100 sm:visible sm:relative sm:left-0 lg:absolute lg:left-[100%] lg:bg-[#191d3a] lg:opacity-0 lg:invisible'>
                                            <li className='sm:hover:bg-transparent sm:pl-4 sm:before:content-["-"] sm:before:p-2 sm:last:pb-0 sm:text-sm sm:text-white p-2 hover:bg-slate-200 group2 lg:before:content-none lg:last:pb-2'><a href="" className='text-white'>Laravel</a></li>
                                            <li className='sm:hover:bg-transparent sm:pl-4 sm:before:content-["-"] sm:before:p-2 sm:last:pb-0 sm:text-sm sm:text-white p-2 hover:bg-slate-200 group2 lg:before:content-none lg:last:pb-2'><a href="" className='text-white'>NodeJS</a></li>
                                            <li className='sm:hover:bg-transparent sm:pl-4 sm:before:content-["-"] sm:before:p-2 sm:last:pb-0 sm:text-sm sm:text-white p-2 hover:bg-slate-200 group2 lg:before:content-none lg:last:pb-2'><a href="" className='text-white'>ASP.NET</a></li>
                                        </ul>
                                    </li>
                                    <li className='sm:hover:bg-transparent sm:pl-3 sm:before:content-["+"] sm:before:p-2 sm:text-sm sm:text-white p-2 relative hover:bg-slate-100 group lg:before:content-none'><a href="" className='text-white group-hover:text-[#bf1650]'>ASP.NET</a></li>
                                </ul>
                            </li>
                            <li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><a href="" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>Category</a></li>
                            <li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><Link to="/content/akdk" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>Content</Link></li>
                            <li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><a href="" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>help</a></li>
                        </ul>
                    </nav>
               </div>
            </div>
        </div>
    </>
  )
}
