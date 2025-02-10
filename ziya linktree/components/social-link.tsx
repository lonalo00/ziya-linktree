import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-full p-4 rounded-full bg-white text-pink-400 hover:bg-pink-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
    >
      <Icon className="w-6 h-6 mr-2" />
      <span className="font-medium">{label}</span>
    </Link>
  )
}

