import React from "react"
import { Instagram, Youtube, MessageCircle, Music } from "lucide-react"
import { SocialLink } from "./social-link"


const links = [
  { href: "https://instagram.com/yourusername", icon: Instagram, label: "Instagram" },
  { href: "https://snapchat.com/add/yourusername", icon: MessageCircle, label: "Snapchat" },
  { href: "https://youtube.com/yourusername", icon: Youtube, label: "YouTube" },
  { href: "https://tiktok.com/@yourusername", icon: Music, label: "TikTok" },
]

export function TulipLinkTree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Tulip background */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="w-full max-w-md space-y-6 z-10">
        <div className="text-center mb-8 animate-fade-in-down">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white">Ditt Navn</h1>
          <p className="text-pink-100">CompSci Student</p>
        </div>
        {links.map((link, index) => (
          <div key={link.href} className={`animate-fade-in-up animation-delay-${index + 1}`}>
            <SocialLink {...link} />
          </div>
        ))}
      </div>
    </div>
  )
}

