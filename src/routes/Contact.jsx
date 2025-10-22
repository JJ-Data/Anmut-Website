import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-[#0E1217] text-white p-8 md:p-12 lg:p-16 ">
      <div className="mb-5 md:mb-10 text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tighter text-white md:text-5xl lg:text-6xl">
          Leading way in building & Civil contruction
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.form
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ opacity: 1, y: 0 }}
          action=""
          className="md:col-start-1 md:col-end-3 bg-[#FED835] w-full h-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 lg:gap-5 py-6 px-8 rounded-sm md:rounded-md lg:rounded-lg shadow-lg"
        >
          <div className=" md:col-start-1 md:col-end-3 w-full pb-5 md:pb-0">
            <h2 className="font-bold tracking-normal capitalize text-slate-700  text-xl md:text-xl lg:text-2xl">
              Require for a service
            </h2>
            <p className="font-normal text-base md:text-xl text-slate-600 pt-1 md:pt-3">
              Complete control over products allow us to our customers the best
              quality prices and services. We take great pride in everything
              that we do in Anmut
            </p>
          </div>
          <div className="col-start-1 col-end-3 md:col-end-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="py-4 px-3 w-full bg-white rounded-md text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="
          py-4 px-3 w-full bg-white rounded-md text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="col-start-1 col-end-3 md:col-end-2">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone"
              className="py-4 px-3 w-full bg-white rounded-md text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 pb-5 md:pb-0">
            <label htmlFor="text" className="sr-only">
              Enter your service
            </label>
            <input
              type="text"
              id="service"
              name="service"
              placeholder="Enter Your Required Service"
              className="
          py-4 px-3 w-full bg-white rounded-md text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="col-start-1 col-end-3 group relative w-full flex justify-center 
          py-3.5 text-lg font-medium text-white transition duration-20
          ease-in-out bg-stone-900 rounded-sm md:rounded-md lg:rounded-lg
          hover:bg-slate-900 focus:z-10"
          >
            Submit Request
          </button>
        </motion.form>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-start-3 md:col-end-4 bg-[#FED835] w-full h-full py-6 px-8 rounded-sm md:rounded-md lg:rounded-lg shadow-lg"
        >
          <h3 className="font-semibold capitalize text-slate-700 text-xl">
            Contact Info
          </h3>
          <div className="mt-3">
            <p className="capitalize text-lg text-slate-700 font-medium">
              Quick contact
            </p>
            <div className="text-slate-600 font-light capitalize text-base">
              phone: 0706 278 3359
            </div>
            <div className="text-slate-600 font-light capitalize text-base">
              headquarters: Akure, Ondo
            </div>
          </div>
          <div className="mt-3">
            <p className="capitalize text-lg text-slate-700 font-medium">
              Company Size
            </p>
            <div className="text-slate-600 font-light capitalize text-base">
              Employees: 51 - 200
            </div>
            <div className="text-slate-600 font-light capitalize text-base">
              Associated Members: 3
            </div>
          </div>
          <div className="mt-3">
            <p className="capitalize text-lg text-slate-700 font-medium">
              Opening Hours
            </p>
            <div className="text-slate-600 font-light capitalize text-base">
              monday - friday
            </div>
            <div className="text-slate-600 font-light capitalize text-base">
              09:00 AM - 06:00 PM
            </div>
          </div>
          {/* <p className="capitalize text-lg text-slate-700 font-medium mt-3">
            Do you have any question, just contact us to get help!
          </p> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
