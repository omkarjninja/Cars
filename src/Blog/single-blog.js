import { useState } from "react"

function BlogPage(props){
//     // const [Content,setContent]=useState('')
//  let here=window.location.pathname;
//  let one={
//     val:"",
//     nol:""
//  }
    // // console.log(window.location.pathname)
    // if(here==="/blogs/1")
    // {
    //     const one={
    //         val:"hey",
    //         nol:"hello"
    //     }
    // }else{
        
    // }
    
    return(
        <>

<div class="max-w-screen-xl mx-auto">
   {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<nav aria-label="Breadcrumb" className="w-3/12 mx-auto pt-3">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="/home" className="block transition hover:text-gray-700">
        <span className="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="/blogs" className="block transition hover:text-gray-700"> Blogs </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="" className="block transition hover:text-gray-700"> {props.page} </a>
    </li>
  </ol>
</nav>

    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" 
      style={{height: "24em"}}
      >
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
        //   style={{background-image: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))""}};"
          ></div>
        <img src={props.img} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a href="#"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{props.page}</a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
          </h2>
          <div class="flex mt-3">
            <div>
              <p class="font-semibold text-gray-200 text-sm"> Omkar Jadhav </p>
              <p class="font-semibold text-gray-400 text-xs"> {props.date} </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">{props.para1}</p>

        <p class="pb-6">{props.para2}</p>

        <p class="pb-6">{props.para3}</p>

        <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          {/* Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
          expression
          unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
          Steepest speaking up attended it as. Made neat an on be gave show snug tore. */}
        </div>

        {/* <p class="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
          everything.
          Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
          is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
          among. Delightful remarkably new assistance saw literature mrs favourable.</p> */}

        {/* <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2> */}

        {/* <p class="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
          oh he common
          future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
          simplicity at do projecting increasing terminated. As edward settle limits at in.</p> */}

        {/* <p class="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
          Hundred no
          prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
          ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
          connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
          ask expense are compact. New all paid few hard pure she.</p> */}

        {/* <p class="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
          tastes really
          so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
          elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
          in cold no less been sent hard hill.</p> */}

        {/* <p class="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
          make two real
          miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
          to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
          without me.</p> */}

      </div>
    </main>
  </div>

        </>
    )
}
export default BlogPage;