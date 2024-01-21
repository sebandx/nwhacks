'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"


export default function IndexPage() {
  const generateRandomRoom = () => {
    return `${siteConfig.app}/room.html?room=${
      'xxyxyxxyx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      })
    }`
  };
  return (
    <section className="container grid items-center gap-6 pb-8 pt-5 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <p className="max-w-[700px] text-lg text-muted-foreground">
          Sun Tzu once said... 
        </p>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Excercise? More like
          Extra Fries!
      </h1>
        <Separator />
        <p className="max-w-[700px] text-lg text-muted-foreground">
        WiiGym offers an easy way to workout with friends. Simply invite your friends, and start exercising! 
        WiiGym will take in your exercising statistics and provide them on a leaderboard with others.
        </p> 
      </div>
      <div className="flex gap-4">
        <Link
          href={generateRandomRoom()}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Create Room
        </Link>
        <Link
          rel="noreferrer"
          href="/join"
          className={buttonVariants({ variant: "outline" })}
        >
          Join Room
        </Link>
      </div>
    </section>
  )
}

