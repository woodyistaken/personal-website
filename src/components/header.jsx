import style from './header.module.css'
import { useState,useEffect} from 'react'

export default function Header(){
  const [scrolled,setScrolled]=useState(0)
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(scrolled>240)
  return <nav className={`${style.header} ${scrolled>240?style.headerBottom:style.headerTop}`}>
    <a href="" className={`${style.home} ${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Welcome</a>
    <a href="#projects" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Projects</a>
    <a href="#about" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>About</a>
    <a href="#contact" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Contact</a>
  </nav>
}