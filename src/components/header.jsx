import style from './header.module.css'

export default function Header(){
  return <nav className={style.header}>
    <a href="" className={`${style.home} ${style.links}`}>Welcome</a>
    <a href="#projects" className={style.links}>Projects</a>
    <a href="#about" className={style.links}>About</a>
    <a href="#contact" className={style.links}>Contact</a>
  </nav>
}