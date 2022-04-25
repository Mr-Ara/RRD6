import { Outlet } from 'react-router-dom'
import {Link , NavLink} from 'react-router-dom'
const Courses = () => {
    return ( 
    <>
    <h1>Courses</h1> 
    <NavLink style={({isActive})=>{ return {color: isActive ? 'red' : 'black'}}} to="/courses/tab1">tab1</NavLink>|
    <NavLink  style={({isActive})=>{ return {color: isActive ? 'red' : 'black'}}} to="/courses/tab2">tab2</NavLink>
    <Outlet/>
    </>
    );
}
 
export default Courses;