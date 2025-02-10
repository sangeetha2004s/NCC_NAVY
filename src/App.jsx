import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}>
      {/* Navbar */}
      <nav className="p-5 shadow-md flex justify-between items-center bg-blue-900 text-white">
        <h1 className="text-2xl font-bold">NCC NAVY CEG</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-700 rounded">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?navy,parade')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold">Welcome to NCC NAVY CEG</h2>
          <p className="text-lg mt-4">
            Developing Leadership, Discipline, and Patriotism among young cadets.
          </p>
          <a href="#about" className="mt-5 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="p-10">
        <h3 className="text-3xl font-semibold text-center">About Us</h3>
        <p className="text-lg text-center mt-4">
          NCC Navy CEG is an esteemed unit that trains cadets in naval operations, discipline, and leadership.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="p-10 bg-blue-50">
        <h3 className="text-3xl font-semibold text-center">Upcoming Events</h3>
        <ul className="mt-5 space-y-4 text-center">
          <li>🚢 Naval Training Camp - March 2025</li>
          <li>🎖️ Inter-College Drill Competition - April 2025</li>
          <li>🏆 Adventure Camp - June 2025</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10">
        <h3 className="text-3xl font-semibold text-center">Contact Us</h3>
        <p className="text-lg text-center mt-4">📧 Email: nccnavyceg@example.com</p>
        <p className="text-lg text-center">📍 Location: CEG Campus, Anna University</p>
      </section>

      {/* Footer */}
      <footer className="p-5 text-center bg-gray-800 text-white">
        &copy; 2025 NCC NAVY CEG | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
