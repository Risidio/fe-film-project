"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface ToggleButtonProps {
  options?: {name: string, link?: string , onClick?: ()=>void}[]
  defaultSelected?: number
  onChange?: (selectedIndex: number) => void
  className?: string
}

export default function ToggleButton({
    options = [{ name: "Browse Assets", link: "/asset-management" },
                { name: "Upload New", link: "/upload" }],
  defaultSelected = 0,
  className,
}: ToggleButtonProps) {
    const [selectedIndex, setSelectedIndex] = useState(defaultSelected)
    const router = useRouter()

  const handleSelect = (index: number) => {
      setSelectedIndex(index)
      options[index].onClick?.()
      if (!options[index].link) return
      router.push(options[index].link)
  }

  return (
    <div className={cn("inline-flex rounded-md bg-gray-100 p-0.5 text-sm font-medium shadow-sm", className)}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(index)}
          className={cn(
            "px-4 py-1.5 rounded transition-colors",
            selectedIndex === index ? "bg-white rounded-md text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800",
          )}
        >
          {option.name}
        </button>
      ))}
    </div>
  )
}
