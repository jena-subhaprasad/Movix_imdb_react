import { useState } from 'react'
import { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfig, getGenres } from './store/homeSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details';
import PageNotFound from "./pages/404/PageNotFound"
import Explore from "./pages/explore/Explore"
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        // console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfig(url))
      })
  }

  const set_Genres= async ( )=>{
    let promises=[];
    let endpoints=["tv","movie"];
    let allGenres={};
    endpoints.forEach((tvOrMovie)=>{
      promises.push(fetchDataFromApi(`/genre/${tvOrMovie}/list`));
    })

    const data=await Promise.all(promises); 
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });
    //  console.log(allGenres);
     dispatch(getGenres(allGenres));

  }
  useEffect(() => {
    fetchApiConfig();
    set_Genres();
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
