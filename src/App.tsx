import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar, Button, Card } from 'flowbite-react';

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
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color="light">
            Create a crew
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/create">Create</Link>
        </Navbar.Collapse>
      </Navbar>
      <hr />

      <div className="container mx-auto">
        <Outlet />
      </div>

    </div>
  );
}

function Home() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Home Page
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Splash screen with 'create crew' and 'load crew' options
        </p>
      </Card>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contact details
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Email details and github link
        </p>
      </Card>
    </div>
  );
}

function Create() {
  return (
    <Card href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create a crew
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          The start of the crew creation wizard
        </p>
      </Card>
  );
}
