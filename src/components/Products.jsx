import React, { useState } from "react";
import cardImage from "../assets/card.jpg";
import ReactMarkdown from "react-markdown";

const categories = ["All", "AI Products", "Lorem 1", "Lorem 1", "Lorem 1", "Lorem 1"];

const productsData = [
  {
    title: "Automated Product Videography",
    description:
      "Turn any product photo into stunning professional product photography and promotional videos – powered by AI.",
    overlayDescription:
      "Our Automated Product Videography tool transforms simple product photos into high-quality product photography and engaging promotional videos within minutes. No studio, no models, no expensive shoots – just upload a photo and get professional visuals ready for social media, e-commerce, and marketing campaigns. Perfect for businesses who want cost-effective product ads at scale.",
    category: "AI Products",
    image: cardImage,
  },
  {
    title: "AI UGC Video Generator",
    description:
      "Generate authentic UGC-style videos from a product photo — with or without a custom character.",
   overlayDescription: `
Our AI UGC Video Generator creates engaging user-generated content (UGC) videos from just a product image. Perfect for brands that want relatable, social-media-friendly video ads without hiring creators.

- • Upload only your product photo → get instant UGC-style promotional videos.
- • Or upload a character/person photo → place your product in videos with real-looking characters for added authenticity.
`,

    category: "AI Products",
    image: cardImage,
  },
  {
    title: "AI UGC Video Generator for Jewelry",
    description:
      "Showcase your jewelry in elegant, lifestyle-inspired UGC videos designed for brand storytelling.",
   overlayDescription: `
Our AI UGC Video Generator for Jewelry creates premium, high-quality videos that highlight your ornaments in the most authentic way.

- • Upload your jewelry photos → get lifestyle-inspired videos with models wearing them.
- • Choose from cultural, festive, or modern backgrounds.
- • Perfect for Instagram reels, product launches, and digital campaigns.
`,

    category: "Lorem 1",
    image: cardImage,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative bg-transparent text-white py-16 px-4 min-h-screen overflow-hidden">
      {/* 🌈 Animated gradient top-left */}
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#0020d8b6] via-[#00041F] to-[#04123f] opacity-40 rounded-full blur-3xl animate-gradientMove pointer-events-none overflow-hiddenn"></div>
      <div className="absolute bottom-28 -right-40 w-[400px] h-[400px] bg-gradient-to-br from-[#0020d88e] via-[#00041F] to-[#04123fda] opacity-40 rounded-full blur-3xl animate-gradientMove pointer-events-none overflow-hidden"></div>
      <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-[#0020d865] via-[#00041fda] to-[#04123fbb] opacity-40 rounded-full blur-3xl animate-gradientMove pointer-events-none overflow-hidden"></div>
      {/* Gradient Animation (keyframes in Tailwind extension) */}
      <style>{`
        @keyframes gradientMove {
          0% { transform: translate(-20px, -20px) scale(1); opacity: 0.6; }
          50% { transform: translate(40px, 30px) scale(1.1); opacity: 0.8; }
          100% { transform: translate(-20px, -20px) scale(1); opacity: 0.6; }
        }
        .animate-gradientMove {
          animation: gradientMove 8s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-xl text-[#194EFF] mb-6">PRODUCTS</h2>
        <h1 className="text-4xl font-bold mb-12">Explore Our Innovations</h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-[#194EFF] text-white border-[#194EFF]"
                  : "bg-transparent text-[#194EFF] border-[#194EFF]"
              } hover:bg-[#194EFF] transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Layout - 2 top, 1 bottom center */}
        <div className="flex flex-col items-center gap-20">
          {/* Top two cards */}
          <div className="flex flex-col md:flex-row justify-center gap-16">
            {filteredProducts.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="relative bg-[#55555547] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-lg w-[350px] md:w-[450px] md:h-[520px] cursor-pointer transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-2/3 p-2 object-cover rounded-3xl"
                />

                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold mb-2 tracking-wide">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 font-thin text-lg">
                    {product.description.slice(0, 150)}
                  </p>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-[#194EFF] text-white rounded-3xl flex flex-col justify-center items-start text-left p-4 transition-all duration-500 ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-3 tracking-wide">
                    {product.title}
                  </h3>
                  <div className="text-white/80 md:text-base text-sm mb-6 leading-relaxed font-thin tracking-wide p-2">
                    <ReactMarkdown>{product.overlayDescription}</ReactMarkdown>
                  </div>

                  <button className="bg-white text-[#194EFF] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition w-full bottom-0">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Center bottom card */}
          {filteredProducts[2] && (
            <div
              className="relative bg-[#55555547] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-lg w-[350px] md:w-[450px] md:h-[520px] cursor-pointer transition-transform duration-300 hover:scale-102"
              onMouseEnter={() => setActiveIndex(2)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            >
              <img
                src={filteredProducts[2].image}
                alt={filteredProducts[2].title}
                className="w-full h-2/3 p-2 object-cover rounded-3xl"
              />

              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 tracking-wide">
                  {filteredProducts[2].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {filteredProducts[2].description.slice(0, 150)}
                </p>
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-[#194EFF] text-white rounded-3xl flex flex-col justify-center items-start text-left p-4 transition-all duration-500 ${
                  activeIndex === 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <h3 className="text-xl font-bold mb-3 tracking-wide">
                  {filteredProducts[2].title}
                </h3>
                <div className="text-white/90 md:text-base text-sm mb-6 leading-relaxed tracking-wide font-thin">
                  <ReactMarkdown>{filteredProducts[2].overlayDescription}</ReactMarkdown>
                </div>

                <button className="bg-white text-[#194EFF] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 w-full bottom-0 transition">
                  Explore Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
