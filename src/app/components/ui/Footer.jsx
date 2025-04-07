// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Abdullah Kheder — Built with ❤️ using React & Tailwind
      </p>
      <div className="mt-2 flex justify-center gap-4 text-xs">
        <a href="https://github.com/abodikheder11" target="_blank" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/abdullah-kheder-8497822a6/" target="_blank" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
