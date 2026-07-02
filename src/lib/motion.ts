export const fadeUp = {
   initial: {
      opacity: 0,
      y: 30,
   },
   animate: {
      opacity: 1,
      y: 0,
   },
};

export const fade = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
};

export const pop = {
   initial: {
      scale: 0.8,
      opacity: 0,
   },
   animate: {
      scale: 1,
      opacity: 1,
   },
};

export const staggerContainer = {
   animate: {
      transition: {
         staggerChildren: 0.35,
      },
   },
};

export const staggerItem = {
   initial: {
      opacity: 0,
      y: 20,
   },
   animate: {
      opacity: 1,
      y: 0,
   },
};
