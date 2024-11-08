

const Contact = () => {
  
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-pink-500 p-4 md:p-8 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white shadow-lg bg-purple-500 px-6 md:px-10 py-4 md:py-5 rounded-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl mb-6 md:mb-8">
        Hey there, please contact me for more info
      </h1>

      <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg w-full max-w-sm md:max-w-md">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-2 rounded hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 md:mt-10 text-white">
        <h2 className="text-xl md:text-2xl font-semibold">Contact Details:</h2>
        <p>
          Email: <a href="mailto:mohitparmar1501@gmail.com" className="underline">mohitparmar1501@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+919917032850" className="underline">+91 9917032850</a>
        </p>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/mohit-singh-parmar-1ba948274/" className="text-white hover:underline">LinkedIn</a>
          <a href="https://github.com/Mohitsinghparmarg" className="text-white hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
