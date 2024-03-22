
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <p> 404 Page Not Found</p>
            <button><Link to="/">Go back home</Link></button>
            
        </div>
    );
};

export default ErrorPage;