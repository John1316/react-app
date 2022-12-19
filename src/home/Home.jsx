import { useEffect, useState } from "react";

export default function Home(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('home component did mount');
        return () => {
            console.log('home component will unmount')
        }
    }, []);
    // useEffect(() => {
    //   console.log('test');
    // }, )
    
    useEffect(() => {
        if (count === 0) 
            return;
        console.log('component did update');
    }, [count]);
    function changeCount(){
        setCount(Math.random() )
    }
    return (<>
        <h1>Hamda</h1>
        <p>Count: {count}</p>
        <button onClick={changeCount} className="btn btn-info">Plus</button>
    </>)
}