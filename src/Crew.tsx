import { Link } from "react-router-dom";

export default function Crew() {
    return (
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          crew wizard goes here
        </h5>

        <Link to="/background">Backgrounds</Link>

      </div>
    );
  }