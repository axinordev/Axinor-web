import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import moonImg from "../assets/overlay.jpg"; // ✅ make sure this image exists

export default function Preloader() {
  const mountRef = useRef(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // ===== Scene Setup =====
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // ===== Lighting =====
    const ambientLight = new THREE.AmbientLight(0x3366ff, 0.7);
    const pointLight = new THREE.PointLight(0x99ccff, 2);
    pointLight.position.set(5, 3, 5);
    scene.add(ambientLight, pointLight);

    // ===== Moon =====
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImg);
    const moonGeometry = new THREE.SphereGeometry(1, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
      roughness: 0.7,
      metalness: 0.3,
      emissive: new THREE.Color(0x001133),
      emissiveIntensity: 0.2,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

// ===== Nebula Particles =====
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 25;
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

// ✅ Create a soft blurred star texture (using canvas)
const createStarTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(150, 200, 255, 1)");
  gradient.addColorStop(0.3, "rgba(100, 150, 255, 0.6)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

const blurredStarTexture = createStarTexture();

const particlesMaterial = new THREE.PointsMaterial({
  color: 0x66aaff,
  size: 0.09,
  transparent: true,
  opacity: 0.95,
  map: blurredStarTexture,
  alphaMap: blurredStarTexture,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);


    // ===== Animation Loop =====
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Moon rotation
      moon.rotation.y += 0.004;
      moon.rotation.x += 0.001;

      // Nebula motion
      particlesMesh.rotation.y += 0.0009;

      // Cinematic camera movement
      frame += 0.003;
      camera.position.x = Math.sin(frame) * 1.2;
      camera.position.z = 4 + Math.cos(frame) * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ===== Handle Resize =====
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ===== Cleanup =====
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // ===== Fade after 6 seconds =====
  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center text-blue-300 font-semibold tracking-widest overflow-hidden z-[9999] transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 3D Scene */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-center text-center drop-shadow-[0_0_20px_#1e3aff]">
        <h2 className="text-2xl md:text-3xl animate-pulse">Loading...</h2>
      </div>
    </div>
  );
}
