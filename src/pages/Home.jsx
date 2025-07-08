function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      <img
        src="/shoes/hero-sneaker.jpg"
        alt="Hero Sneaker"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-xl">
          Walk Like You Mean It
        </h1>
        <a
          href="https://wa.me/254746631707?text=Hey%20Supaz%2C%20I'm%20interested%20in%20your%20shoes!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-300 transition">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
