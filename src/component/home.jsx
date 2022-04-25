import {Link,useNavigate} from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()
    return (
    <>
    <button onClick={()=>{
        navigate('/dashboard', {state: 'AmiReza'});
        }}>Login</button>
    <h1>Home</h1> 
    <Link to="/about">About</Link>|
    <Link to="/courses">courses</Link>
    </> );
}
 
export default Home;