import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'
import "./SearchBar.css"


function SearchBar({placeholder,data}) {

    const [filteredData,setFilteredData] = useState([]);

    const handleFilter =(event)=>{

        const searchWord = event.target.value;

        const newFilter = data.filter((item)=>{
            return item.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        setFilteredData(newFilter)

        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    }

   

  return (
    <div className='search'>
    <div className='searchInputs'>
        <input type='text' placeholder={placeholder} onChange={handleFilter}/>
        <div className='searchIcon'> <SearchIcon/> </div>
    </div>
    {
        filteredData.length !=0 && (

    <div className='dataResult'>

        {filteredData.slice(0,10).map((value,key)=>{

            return (<a key={value.pages} className="dataItem" href={value.link} target="_blank"> 
            
            <p>{value.title}</p></a>)
        })}
    </div>
        )
}
      
    </div>
  )
}

export default SearchBar
