import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./productCard";


const SearchResultsPage = () => {
    const location = useLocation()
    const queryparams = new URLSearchParams(location.search)
    const searchQuery = queryparams.get('q')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchSearchResults = async () => {
            try{
                const response = await fetch(`http://localhost:8000/api/products?q=${searchQuery}`)
                if (!response.ok){
                    throw new Error('Failed to fetch results')
                }
                const data = await response.json()
                setSearchResults(data)
            } catch (error) {
                console.error("Error: ", error)
            }
        }

        fetchSearchResults();
        
    }, [searchQuery])

    return(
        <div>
            <h3>Search Results for {searchQuery}</h3>
            <div className="row">
                {searchResults.map((product) => (
                    <div key={product.id} className="col-md-6">
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResultsPage