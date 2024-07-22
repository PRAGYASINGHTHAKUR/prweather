

const TopButton = (setQuery) => {
    const cities= [
        {
            id: 1,
            name: 'Gorakhpur'
        },
        
        {
            id: 2,
            name: 'Mumbai'
        },
        
        {
            id: 3,
            name: 'Bangalore'
        },
        
        {
            id: 4,
            name: 'Delhi'
        },
        {
            id: 5,
            name: 'Surat'
        },
        
        
    ]
  return (
    <div className="flex-items-center justify-around my-6">
   
   {
  cities.map((city)=> (
    <button key={city.id} className="text-lg text-white font-medium hover:bg-gray-600/20 px-9 py-2
     rounded-md transition ease-in"
     onClick={() => setQuery({q: city.name})}>
        {city.name}
    </button>
  ))

   }
    
  </div>
  )
  
}

export default TopButton
