'use client'
import Board from '@/components/board';
import '@/components/styles.css';
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"


function App() {
  return (
    <div className="App" id='main'>
        <Board></Board>
    </div>
  );
}

export default App;