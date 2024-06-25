import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./productCard";

const SearchResultsPage = () => {
    const location = useLocation()
    const queryparams = new URLSearchParams(location.search)
    const searchQuery = queryparams.get('q')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchResults = async () => {
            const response = await axios.get(`http://localhost:8000/api/products/search?q=${searchQuery}`)
            if (!response.ok){
                throw new Error('Failed to fetch results')
            }
            const data = await response.json
            setSearchResults(data)
        }
    })
}

export default SearchResultsPage