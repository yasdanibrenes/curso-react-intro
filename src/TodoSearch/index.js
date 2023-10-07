import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}) {
    return(
      <input 
        className='TodoSearch' 
        value={searchValue}
        onChange={ (event)=> {
          setSearchValue(event.target.value);
        } }
        placeholder="Search..." 
      />
    )
  };

export { TodoSearch };
