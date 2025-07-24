import style from './Header.module.css'
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
  return <nav className={`${style.header} ${scrolled>240?style.headerBottom:style.headerTop}`}>
    <a href="" className={`${style.home} ${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Welcome</a>
    <a href="#Projects" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Projects</a>
    <a href="#About" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>About</a>
    <a href="#Contact" className={`${style.links} ${scrolled>240?style.linksBottom:style.linksTop}`}>Contact</a>
  </nav>
}