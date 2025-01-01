import { useNavigate } from "react-router"
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className="error">
        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678080-shield-error-1024.png" alt="Error" />
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button onClick={()=>{navigate('/')}}>Go to Home Page</button>
    </div>
  )
}

export default ErrorPage