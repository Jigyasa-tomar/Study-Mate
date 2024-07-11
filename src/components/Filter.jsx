import React from 'react'

const Filter = ({filterData, category, setCategory}) => {

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap justify-center max-w-max space-x-4 gap-y-4 mx-auto py-4'>
      {
        filterData.map( (data) => {
          return (
            <button 
              key={data.id}
              className={`text-sm text-white bg-gray-900 font-medium py-1 px-2 
              rounded-md hover:bg-opacity-50 border-2 transition-all duration-300
              ${category === data.title ? 
                "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent" 
              }
              `}
            
            onClick={() => filterHandler(data.title)}> {data.title} </button>
          )
          
      })
      }
    </div>
  )
}

export default Filter;
