import React, { useState } from 'react';
import Card from './Card';

const Cards = ({courses, category}) => {

  const [likedCourses, setLikedCourses] = useState([]); 

  // returns you a list of all courses received from api 
    const getCourses = () => {
      if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach( (courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else{
      return courses[category];
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-5'>
      {
        getCourses().map( (course) => {
          return <Card key={course.id} 
                    course={course} 
                    likedCourses={likedCourses} 
                 setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards;
