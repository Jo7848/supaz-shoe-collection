function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h1>
      
      <p className="mb-4 text-lg">
        WhatsApp:{" "}
        <a
          className="text-green-400 underline"
          href="https://wa.me/254746631707"
          target="_blank"
          rel="noopener noreferrer"
        >
          +254 746 631 707
        </a>
      </p>

      <p className="text-lg">
        Email:{" "}
        <a
          className="text-blue-400 underline"
          href="mailto:wassupnoname@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          wassupnoname@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
