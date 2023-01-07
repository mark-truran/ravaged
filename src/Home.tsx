import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              what do you want to do?
            </h5>
            
            <div className="font-normal text-gray-700 dark:text-gray-400 p-4">
                <Link to="/crew">
                    <div className="flex items-center space-x-4 group">
                            <FontAwesomeIcon icon={faRocket} size="2xl" border className='border-slate-100 group-hover:bg-yellow-100 group-hover:border-yellow-200'/> 
                            <span className="group-hover:text-yellow-400">create a new crew</span>
                    </div>
                </Link>
                <Link to="/load">
                    <div className="flex items-center space-x-4 mt-3 group">
                            <FontAwesomeIcon icon={faEdit} size="2xl" border className='border-slate-100 group-hover:bg-yellow-100 group-hover:border-yellow-200'/> 
                            <span className="group-hover:text-yellow-400">load an existing crew</span>
                    </div>
                </Link>
            </div>
        </div>
      );
}