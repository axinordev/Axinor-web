// import React, { useEffect, useState } from "react";

// export default function Preloader() {
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setFade(true), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#00061A] to-[#000010] z-[9999] transition-opacity duration-[1000ms] ${
//         fade ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       {/* 🌌 Background glow */}
//       <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl animate-pulse"></div>

//       {/* 🌀 Stylish 3D Rotating A */}
//       <div className="relative">
//         <h1
//           className="text-[120px] sm:text-[150px] font-extrabold text-blue-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.8)] animate-rotate3D"
//           style={{
//             textShadow:
//               "0 0 15px rgba(37,99,235,0.8), 0 0 25px rgba(37,99,235,0.6), 0 0 40px rgba(30,64,175,0.7)",
//             transformStyle: "preserve-3d",
//           }}
//         >
//           A
//         </h1>

//         {/* Glowing ring behind letter */}
//         <div className="absolute inset-0 rounded-full w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] border-[3px] border-blue-500/30 blur-[2px] animate-[spin_8s_linear_infinite]"></div>
//       </div>

//       {/* ✨ Loading Text */}
//       <p className="mt-8 text-blue-300 text-lg tracking-[0.3em] animate-pulse drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]">
//         Initializing...
//       </p>
//     </div>
//   );
// }
