<li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><Link to="/home" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>home</Link></li>
<li className='p-4 relative hover:bg-slate-200 sm:p-1 sm:w-full sm:hover:bg-transparent lg:w-auto lg:hover:bg-slate-200 lg:p-4'><Link to="/" className='w-full h-full text-white text-[1rem] font-roboto block capitalize'>Program</Link>
    <ul className='sm:relative sm:bg-transparent w-44 absolute top-[100%] left-0 bg-black rounded-sm menu-child opacity-0 visible transition-all ease-in-out duration-700 sm:opacity-100 sm:visible lg:absolute lg:bg-[#191d3a] lg:opacity-0 lg:invisible'>
        <li className='sm:hover:bg-transparent sm:pl-3 sm:before:content-["+"] sm:before:p-2 sm:text-sm sm:text-white p-2 relative hover:bg-slate-100 group lg:before:content-none'><a href="" className='text-white group-hover:text-[#bf1650]'>Laravel</a></li>
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


{
    categories.multiple.length>0 && categories.multiple.map(({slug,name,parent_id,id,children_categories})=>{
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
   