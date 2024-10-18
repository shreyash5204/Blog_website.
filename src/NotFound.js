import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from 'react-router-dom';

const NotFoud = () => {
    const history = useHistory();
    const handleBack = () => {
            history.push('/');
    }
    return (
        <div className="not-found">
            <h2>Not Found</h2>
            <p>The page you are looking for is not found.....</p>
            <button onClick={handleBack}>Back to home page....</button>
        </div>
    );
}
 
export default NotFoud;