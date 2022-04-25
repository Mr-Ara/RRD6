import {useLocation} from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation()
    console.log(location.state)
    return ( <h1>Dashboard/ Hi {location.state} </h1> );
}
 
export default Dashboard;