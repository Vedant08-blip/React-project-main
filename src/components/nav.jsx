import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-xl">

      <div className="bg-blue-500 text-white rounded-lg px-6 py-3 shadow-lg flex justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold tracking-wide">Project</div>
        </Link>

        <div className="space-x-6 text-lg font-medium">

          <Link to="/counter" className="hover:text-yellow-300 transition-colors">Counter</Link>
          <Link to="/twitterr" className="hover:text-yellow-300 transition-colors">Twitter</Link>
          <Link to="/input" className="hover:text-yellow-300 transition-colors"> Input </Link>
          <Link to="/data" className="hover:text-yellow-300 transition-colors"> Data </Link>
          <Link to="/store" className="hover:text-yellow-300 transition-colors"> Store </Link>
          <Link to="/api" className="hover:text-yellow-300 transition-colors"> Fetch </Link>
          <Link to="/apidata" className="hover:text-yellow-300 transition-colors"> Get </Link>
          <Link to="/emoji" className="hover:text-yellow-300 transition-colors"> Emoji </Link>
          <Link to="/form" className="hover:text-yellow-300 transition-colors"> Form</Link>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
