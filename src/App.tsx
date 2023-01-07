import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact';
import Home from './Home';
import Crew from './Crew';
import Load from './Load';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="crew" element={<Crew />} />
          <Route path="load" element={<Load />} />
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
          <FontAwesomeIcon icon={faRocket} size="xl" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-2 font-mono">
            ravaged
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mx-auto pt-4">
        <Outlet />
      </div>

    </div>
  );
}