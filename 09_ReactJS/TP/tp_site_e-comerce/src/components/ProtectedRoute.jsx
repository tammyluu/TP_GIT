import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

    if(false){
        return (<>
            {props.children}
        </>)
    }else {
        alert("You are not authorized to access this page")
        return <Navigate to={"/"}></Navigate>
    }
}

export default ProtectedRoute