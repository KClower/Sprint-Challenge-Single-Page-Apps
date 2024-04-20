import React, { useState } from "react";

export default function SearchForm(props) {

 const {searchHandler}=props

 const [searchTerm, setSearchTerm] = useState("")
 

 const SubmitHandler = evt => {
  evt.preventDefault();
  searchHandler(searchTerm)
  setSearchTerm("")
 }

const onChange = evt => {

  console.log(evt.target.value)
  setSearchTerm(evt.target.value)
}

 return (
    <section className="search-form text-center">
     <form onSubmit={SubmitHandler}>
      <label className="me-2">Search Character</label>
      <input onChange={onChange} value={searchTerm} type="text"/>
     </form>
    </section>
  );
}
