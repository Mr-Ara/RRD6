import {useParams} from 'react-router-dom'



const Content = () => {
    const {id} = useParams()
    return ( <h1>Content is : {id}</h1> )
}
 
export default Content;