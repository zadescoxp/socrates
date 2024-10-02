import { cubicBezier } from "framer-motion"

const textVar = {
    initial: {
      top: 100,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    animate: {
        top: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition:{
            ease: cubicBezier(0, 0.55, 0.45, 1),
            duration: 0.75,
          }
    }, 
}

export {textVar}