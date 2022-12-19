import Axios  from "axios";
import { useEffect, useState } from "react";

export default function Home(){
    let [getMovies, setTrendingMovies] = useState([])
    async function getTrendingMovies(){
        let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=64d768e4d0a647d938254dd3d191863f`)
        setTrendingMovies(data.results)
    }
    // const [count, setCount] = useState(0);

    useEffect(() => {
        getTrendingMovies()
    }, []);
    // useEffect(() => {
    //   console.log('test');
    // }, )
    
    // useEffect(() => {
    //     if (count === 0) 
    //         return;
    //     console.log('component did update');
    // }, [count]);
    // function changeCount(){
    //     setCount(Math.random() )
    // }
    return (<>
        <div className="row h-100 tex-center justify-content-center align-items-center">
            {getMovies.length > 0 ? getMovies.map((movie, index) => 
                
                <div key={index} className="col-md-3">
                    <div  className="card">
                        <img src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
                        <div className="card-body">
                            <h3 className="card-title">{movie.title}</h3>
                            <p className="card-text">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            ) : <div className="h-100"><i className="fas fa-spin fa-spinner fa-2x"></i></div>}
        </div>
    </>)
}