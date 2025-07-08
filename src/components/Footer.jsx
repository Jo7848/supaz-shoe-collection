function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center space-y-4 sm:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Supaz Shoe Collection. All rights reserved.</p>
        
        <a
          href="https://wa.me/254746631707?text=Hey%20Supaz%2C%20I'm%20interested%20in%20your%20shoes!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;
