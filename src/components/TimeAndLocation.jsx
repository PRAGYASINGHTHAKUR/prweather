// import React from "react"

const TimeAndLocation = ({

  // eslint-disable-next-line react/prop-types
  weather: {formattedLocalTime, name, country},

}) => {
  return (
    <div className="text-white">
        <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">
           
            {formattedLocalTime}
        </p>
        </div>

        <div  className="flex items-center justify-center my-3">
        <p className="text-2xl font-medium">
          {`${name} , ${country}`}
        </p>
        </div>
    </div>
  )
}

export default TimeAndLocation