"use client"

import * as React from "react"
import { PersonIcon } from "@radix-ui/react-icons"
//import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navigate } from "./redirect"

export function Account() {
  //const { theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
            <PersonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Account</span>
        </Button>
      </DropdownMenuTrigger>
      {(localStorage.getItem('token') === null || localStorage.getItem('token') === '') &&
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => navigate("/login")}>
            Sign in
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/signup")}>
            Create Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      }
      {(localStorage.getItem('token') !== null && localStorage.getItem('token') !== '') &&
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => localStorage.setItem('token', '')}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      }
    </DropdownMenu>
  )
}
