import React from 'react';
import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"

//import SignIn from './layout'; // Import the SignIn component

const App: React.FC = () => {
    return (
        <div className="App">
            <Input />
        </div>
    );
}

export default App;