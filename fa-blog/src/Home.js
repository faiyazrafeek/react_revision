const Home = () => {
    const handleClick = () => {
        alert("hello user")
    }

    const handleClickMeAgain = (name, e) => {
        console.log('hello ' + name , e.target);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {handleClickMeAgain('Faiyaz', e)}}>Click Me Again</button>
        </div>
     );
}
 
export default Home;