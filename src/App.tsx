import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar, Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="create" element={<Create />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Navbar
        fluid={true}
        rounded={true}
        className="container mx-auto"
      >
        <Navbar.Brand href="/home">
          <FontAwesomeIcon icon={faRocket} size="xl"/>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-2 font-mono">
            ravaged
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/create">Create</Link>
        </Navbar.Collapse>
      </Navbar>
      <hr />

      <div className="container mx-auto pt-4">
        <Outlet />
      </div>

    </div>
  );
}

function Home() {
  return (
    <div>
       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          home page
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 pt-2">
          <FontAwesomeIcon icon={faRocket}/> 
          <span className="ml-2">Description of the app and the game</span> 
        </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          contact details
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 pt-2">
          <FontAwesomeIcon icon={faRocket}/> 
          <span className="ml-2">Email details and github link </span> 
        </p>
    </div>
  );
}

function Create() {
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        create a crew
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 pt-2">
        <FontAwesomeIcon icon={faRocket}/> 
        <span className="ml-2">The start of the crew creation wizard </span> 
      </p>
    </div>
  );
}
