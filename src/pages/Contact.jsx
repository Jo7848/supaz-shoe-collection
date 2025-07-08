function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl bg-gray-100 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p>+254 746 631 707</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>wassupnoname@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">WhatsApp:</h3>
            <a
              href="https://wa.me/254746631707?text=Hey%20Supaz%2C%20I'm%20interested%20in%20your%20shoes!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
