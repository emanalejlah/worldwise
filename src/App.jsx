import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";


import CityList from "./components/CityList";
import { useEffect, useState } from "react";


function App() {
  const [cities , setCities] = useState([])
  const [isLoading , setIsLoading] = useState(false)

useEffect(function(){

  async function fetchCities(){

    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:9000/cities`).then(
        setCities(res)
      )
    }catch{
      alert("there was an erroe lodaing data ...")
    } finally {
      setIsLoading(false);
    }
    
  }
fetchCities()
}, [])
  return (
    <div>
      <h1>hellow Router</h1>
      <BrowserRouter>
      <Routes>
    < Route index element={<Homepage />} />
    < Route path="Product" element={<Product />} />
    < Route path="Pricing" element={<Pricing />} />
    < Route path="login" element={<Login />} />
   
   
    <Route Route path="app" element={<AppLayout />} >
    <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
    < Route path="countries" element={<p>Countries</p> } />
    < Route path="form" element={<p>Form</p> } />
</Route>
    < Route path="*" element={<PageNotFound />} />



      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App;
