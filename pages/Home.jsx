import { AboutSection } from "../src/Components/AboutSection"
import { ContactSection } from "../src/Components/ContactSection"
import { Footer } from "../src/Components/Footer"
import { HeroSection } from "../src/Components/HeroSection"
import { Navbar } from "../src/Components/Navbar"
import { ProjectSection } from "../src/Components/ProjectSection"
import { SkillsSection } from "../src/Components/SkillsSection"
import { StarBackground } from "../src/Components/StarBackground"
import { ThemeToggle } from "../src/Components/ThemeToggle"


export const Home=()=>
{
    return(
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
       {/* Theme Toggle*/}
        <ThemeToggle/>

       {/* Background Effects*/}
    <StarBackground/>
       {/* Navbar*/}
    <Navbar/>
       {/* Main Content*/}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
       {/* Footer*/}
       <Footer/>
       </div>
        )
}