import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {

  const [readmore, setReadmore] = useState(false);
  const info = readmore ? course.description : `${course.description.substring(0,110)}...`;

  function clickHandler(){

    if(likedCourses.includes(course.id)){
      setLikedCourses( (prev) => prev.filter( (cid) => cid !== course.id));
      toast.warning("Liked removed");
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses( (prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }  
  }

  function readmoreHandler(){
    setReadmore(!readmore);
  }
  
  return (
    <div className='w-[300px] bg-gray-800 overflow-hidden rounded-md'>
      <div className='relative'>
        <img src={course.image.url}/>

        <div className='w-[30px] h-[30px] rounded-full bg-white absolute right-2 bottom-[-10px]
        grid place-items-center'>
            <button onClick={clickHandler}>
                {
                  likedCourses.includes(course.id) ? 
                  (<FcLike fontSize="1.5rem"/>) : (<FcLikePlaceholder fontSize="1.5rem"/>)
                }
            </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white text-lg font-semibold leading-5'>{course.title}</p>
        <p className='text-white text-sm mt-2'>{info}
        <span onClick={readmoreHandler}
        className='cursor-pointer text-cyan-300'>
          {
            readmore ? (" Show Less") : (" Read more")
          }
        </span>
        </p>
      </div>
    </div>
  )
}

export default Card;
