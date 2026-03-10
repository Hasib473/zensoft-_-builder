import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import bgimg from '../assets/191dd62a0da18955d808a8a8c771a3b6cd219d03.jpg'
import location from '../assets/location.png'
import logoimg from '../assets/zensoft logo.png'

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 object-contain"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

       <div className="relative flex justify-center pt-10">
        <img className="w-30 relative z-10" src={logoimg} alt=" logo" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

     

      {/* Content */}
<div className="relative max-w-7xl mx-auto px-2 py-5 grid md:grid-cols-3 gap-12 text-center justify-items-center">
        {/* Location */}
        <div>
          <h3 className="text-lg text-left font-semibold mb-8 text-blue-300">Location</h3>

          {/* Map Image */}
          <img
            src={location}
            alt="map"
            className=" mb-2 w-50"
          />

          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg text-blue-300 text-left font-semibold mb-8">Pages</h3>

          <div className="grid grid-cols-2 space-y-2 gap-2 text-sm text-left">
            <a href="#">Home</a>
            <a href="#">Career</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Portfolio</a>
            <a href="#">Help & Support</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-8 text-left text-blue-300">Contact</h3>

          <div className="space-y-2 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+88 01303-129515</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+88 01761-834096</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+88 01518-389378</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Mail size={16} />
              <p>info@zensoftlab.com</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <Facebook className="cursor-pointer hover:text-blue-400" />
            <Instagram className="cursor-pointer hover:text-pink-400" />
            <Linkedin className="cursor-pointer hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative text-center text-sm pb-6">
        Copyright © 2026. All rights reserved.
      </div>
    </footer>
  );
}