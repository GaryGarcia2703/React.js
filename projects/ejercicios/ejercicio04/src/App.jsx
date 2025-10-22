import { Tarjeta } from "./tarjeta"

export function App() {
  return(
  <>
    <Tarjeta nombre={"Sonic"} 
    titulo={"Fastest thing alive"} 
    descripcion={"Sonic is a legendary blue hedgehog with unmatched speed and reflexes, capable of feats that seem impossible—even challenging and defeating powerful gods in his adventures. Fearless, rebellious, and driven by his own sense of justice, Sonic is a hero in his own way, fighting not for glory, but to protect those he loves. His friends are his greatest treasure, and his chosen family is the heart of his world. Whether racing across cities, forests, or mountains, Sonic proves that true heroism lies in courage, loyalty, and the determination to stand for what is right."} 

    img={"img/sonic-nuh.gif"} 
    icon={"img/sonic-3.png"}  
    imgGameplay={"img/shadow-gameplay.jpeg"} 
    imgGameplay1={"img/silver-gameplay.png"}
    imgGameplay2={"img/sonic-gameplay.png"}
    />

    <Tarjeta nombre={"Shadow"} 
    titulo={"The ultimate life form"} 
    descripcion={"Shadow the Hedgehog was created over fifty years ago on the Space Colony ARK by Professor Gerald Robotnik as the “Ultimate Life Form.” Designed to harness incredible power and combat any threat, he was engineered with advanced abilities far beyond ordinary hedgehogs. Shadow’s existence was deeply tied to Maria Robotnik, whose kindness gave him purpose and a sense of compassion. However, after a tragic incident on the ARK, Shadow was sealed away in stasis, only to reemerge decades later into a world very different from the one he once knew, struggling to reconcile his mission, memories, and identity."} 

    img={"img/shadowpeque.png"} 
    icon={"img/shadow_foda-removebg-preview.png"} />


    <Tarjeta nombre={"Silver"} 
    titulo={"The Hope of the Future"} 
    descripcion={"Silver is a silver hedgehog from a devastated future, possessing powerful psychokinetic abilities that allow him to move objects, slow time in brief moments, and fight with his mind. Driven by the determination to prevent the catastrophe that destroyed his era, Silver is both idealistic and burdened by pain—his fight is not just for survival, but to give his time a chance at a brighter tomorrow. In the decisive confrontation against Solaris, a temporal entity of apocalyptic power, Silver used his full abilities in a strategic act of sacrifice: he isolated and contained the time streams that fueled Solaris, breaking its connection to time and destroying its energy core. By doing so, he prevented the annihilation of the future, though the victory left deep scars on both Silver and the timeline he fought so hard to save."} 

    img={"img/Silver-aura.gif"}  
    icon={"img/silver-3.png"} />
  </>
  ) 
  
}