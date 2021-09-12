import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import style from './style'

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes('#invite_token')
    ) {
      const { href } = window.location
      window.location.href = `${href.substring(
        0,
        href.indexOf('#')
      )}admin${href.substring(href.indexOf('#'))}`
    }
  }, [])

  return (
    <div class={style.home}>
      <div class={style.about}>
        <div class={style.imageContainer}>
          <div class={style.image} />
        </div>
        <div class={style.quote}>
          <div class={style.details}>
            Propuesta realizada por Sebastian López como guía para los
            auxiliares de HSE nuevos y antiguos que quieran mejorar su desempeño
            en las actividades en campo.
          </div>
          <div class={style.author}>- GestionHSE</div>
        </div>
      </div>
      <div class={style.bio}>
        <p class={style.bioleft}>
          Elaborado en 2021 por Sebastian López y equipo de trabajo.
        </p>
        <p class={style.bioright}></p>
      </div>
    </div>
  )
}

export default Home
