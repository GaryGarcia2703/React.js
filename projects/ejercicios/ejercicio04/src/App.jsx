import { Tarjeta } from "./tarjeta"

export function App() {
  const titulosJuegos = ["Sonic Unleashed", "Sonic Colours", "Sonic Adventure 2"]
  return(
  <>
    <Tarjeta nombre={"Sonic"} 
    titulo={"Fastest thing alive"} 
    descripcion={"Sonic is a legendary blue hedgehog with unmatched speed and reflexes, capable of feats that seem impossible—even challenging and defeating powerful gods in his adventures. Fearless, rebellious, and driven by his own sense of justice, Sonic is a hero in his own way, fighting not for glory, but to protect those he loves. His friends are his greatest treasure, and his chosen family is the heart of his world. Whether racing across cities, forests, or mountains, Sonic proves that true heroism lies in courage, loyalty, and the determination to stand for what is right."} 

    img={"img/sonic-nuh.gif"} 
    icon={"img/sonic-3.png"}  
    imgGameplay={"img/sweet-mountain-p.jpeg"} 
    imgGameplay1={"img/sonic-unleashed-p.jpg"}
    imgGameplay2={"img/sonic-gameplay.png"}

    juegoDescripcion1={"In Sonic Colours, Sonic ventures into space to stop Dr. Eggman’s interstellar amusement park and free the alien Wisps from captivity. Armed with their incredible energy, Sonic gains new abilities that push his speed and creativity to new limits. This adventure highlights his optimism and wit — even in the darkest corners of space, Sonic’s confidence and compassion shine brighter than any star."}

    juegoDescripcion2={"In Sonic Unleashed, Sonic faces one of his greatest challenges yet — himself. After being transformed into a “Werehog” by Dark Gaia’s power, Sonic is forced to confront the darkness within while racing to restore the shattered world. By day, he blazes through continents at supersonic speed, and by night, he fights with raw strength and determination. This journey reveals not just Sonic’s unmatched speed, but his heart — proving that even when the world is broken, his spirit never slows down."}

    juegoDescripcion3={"Sonic Adventure 2 tells the story of two opposing forces — Sonic and Shadow — bound by fate and a common desire for justice. Chased by the military and misunderstood by the world, Sonic stands tall, proving that heroes are defined not by how they’re seen, but by what they stand for. His rivalry with Shadow pushes him to his limits, revealing his true strength: a hero who fights not for fame or power, but for freedom, friendship, and the hope of a better tomorrow."}

    titulosJuegos={titulosJuegos}
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