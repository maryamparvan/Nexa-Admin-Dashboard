import PropertyList from "./PropertyList/PropertyList";
import { IoMdSearch } from "react-icons/io";
import './Product.css';
import { useState } from "react";

const Product = (() =>{
    const [valuetype,setvaluetype] = useState("all");
    const [valueStatue,setvalueStatue] = useState("all");
    const [search,setSearch] = useState("");
    return(
        <div className="productDiv">
            <div className="divHeadProduct">
                <div className="searchPro">
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search here"/>
                    <IoMdSearch />
                </div>
                <select onChange={(e) => setvaluetype(e.target.value)}>
                    <option value="all"  >All</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                </select>
                <select onChange={(e) => setvalueStatue(e.target.value)} >
                    <option value="all">All</option>
                    <option value="sale" >sale</option>
                    <option  value="rent" >rent</option>
                </select>
            </div>
            <PropertyList valuetype={valuetype} valueStatue={valueStatue} search={search}/>
        </div>
    )
})

export default Product;