import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <div className="bg-gray-800">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto bg-gray-800 ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
        >
          <span className="block mb-4 text-xs md:text-sm text-slate-400 font-medium">
            BUILDING HAPPINESS,DELIVERING EXCELLENCE: Anmut breath new life to
            spaces,develops exceptionally
          </span>
          <h1 className="text-4xl md:text-5xl text-white font-semibold">
            Anmut Estate And Property Development
          </h1>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            We specialize in developing properties that meet the needs of modern
            society.
          </p>
          <div className="flex gap-3 md:gap-6">
            <Link
              to="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-800 rounded-lg bg-[#FED835] hover:bg-yellow-400"
            >
              Learn More
              <GoChevronRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 gap-3"
            >
              Contact Us
              <IoChevronDownOutline />
            </Link>
          </div>
        </motion.div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/snap1.jpg",
  },
  {
    id: 2,
    src: "/assets/snap2.jpg",
  },
  {
    id: 3,
    src: "/assets/snap3.jpg",
  },
  {
    id: 4,
    src: "/assets/snap16.jpg",
  },
  {
    id: 5,
    src: "/assets/snap4.jpg",
  },
  {
    id: 6,
    src: "/assets/snap5.jpg",
  },
  {
    id: 7,
    src: "/assets/snap6.jpg",
  },
  {
    id: 8,
    src: "/assets/snap7.jpg",
  },
  {
    id: 9,
    src: "/assets/snap8.jpg",
  },
  {
    id: 10,
    src: "/assets/snap9.jpg",
  },
  {
    id: 11,
    src: "/assets/snap10.jpg",
  },
  {
    id: 12,
    src: "/assets/snap11.jpg",
  },
  {
    id: 13,
    src: "/assets/snap12.jpg",
  },
  {
    id: 14,
    src: "/assets/snap13.jpg",
  },
  {
    id: 15,
    src: "/assets/snap14.jpg",
  },
  {
    id: 16,
    src: "/assets/snap15.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
