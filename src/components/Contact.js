const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-pink-500 p-5 text-center">
      <h1 className="text-5xl font-bold text-white shadow-lg bg-purple-500 px-10 py-5 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl mb-8">
        Hey dear, please contact me for more info
      </h1>

      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2 rounded hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 text-white">
        <h2 className="text-2xl font-semibold">Contact Details:</h2>
        <p>Email: <a href="mailto:your-email@example.com" className="underline">mohitparmar1501@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="underline">+91 9917032850</a></p>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/mohit-singh-parmar-1ba948274/" className="text-white hover:underline">LinkedIn</a>
          <a href="https://github.com/Mohitsinghparmarg" className="text-white hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
