import React from 'react'

export const Footer = () => {
    return (
        <footer className=" text-white py-4 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Suhan Gabriel. All rights reserved.</p>
            <div>
              <p className="text-sm">Follow me on GitHub:</p>
              <a href="https://github.com/Panzer-prime" target="_blank" rel="noopener noreferrer" className="text-goldYellow hover:text-blue-500 transition duration-300">Panzer</a>
            </div>
          </div>
        </footer>
      );
}

