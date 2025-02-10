import { Twitter, Instagram, Github, Linkedin, Youtube } from "lucide-react"
import { SocialLink } from "./social-link"
import React from "react"

const links = [
  { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/yourusername", icon: Instagram, label: "Instagram" },
  { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com/yourusername", icon: Youtube, label: "YouTube" },
]

export function LinkTree() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-gray-600">Your brief bio or tagline</p>
        </div>
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  )
}

