import {React, useState} from 'react'
import data from "./MOCK_DATA.json";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
      <div className="search">
        <input type="text" 
        placeholder="Search..." 
        onChange={(e)=>{setSearchTerm(e.target.value)
        }}
        />
        {data.filter((item)=>{
            if (searchTerm ===""){
               return item
            } else if (item.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                //  console.log(item);
                 return item
            }
        }).map((obj, key) => {
          return (
            <div key={key}>
              <p>{obj.first_name}</p>
            </div>
          );
        })}
      </div>
    );
}

export default SearchInput
