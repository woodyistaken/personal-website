import style from './Main.module.css'
import Title from './Title'
import Row from './Row'

export default function Main(){
  return (
    <div className={style.container}>
      <div className={style.background}></div>
      <div className={style.content}>
        <Title title="Projects"/>
        <Row imgUrl= "https://www.otadesigns.com/images/work/work-lyft.jpg" title="Porject" imgLeft={true}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis atque veniam exercitationem. Totam ipsum, mollitia nostrum nam minima quas inventore sequi delectus quisquam illum, labore, rerum sed corporis sint.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis atque veniam exercitationem. Totam ipsum, mollitia nostrum nam minima quas inventore sequi delectus quisquam illum, labore, rerum sed corporis sint.</p>
          <a href='github'>Github</a>
        </Row>
        <Row imgUrl= "https://www.otadesigns.com/images/work/work-lyft.jpg" title="Porject" imgLeft={false}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis atque veniam exercitationem. Totam ipsum, mollitia nostrum nam minima quas inventore sequi delectus quisquam illum, labore, rerum sed corporis sint.</p>
          <a href='github'>Github</a>
        </Row>
      </div>
    </div>
  )
}