export const PLACES = [
   {
      id: "coffee",
      emoji: "☕",
      title: "Coffee",
      subtitle: "Cozy & Relaxing",
   },
   {
      id: "restaurant",
      emoji: "🍕",
      title: "Dinner",
      subtitle: "Delicious Food",
   },
   {
      id: "movie",
      emoji: "🎬",
      title: "Movie",
      subtitle: "Popcorn Time",
   },
   {
      id: "icecream",
      emoji: "🍦",
      title: "Ice Cream",
      subtitle: "Sweet Choice",
   },
   {
      id: "walk",
      emoji: "🌳",
      title: "Walk",
      subtitle: "Fresh Air",
   },
];

export const getPlace = (id: string) => PLACES.find((item) => item.id === id);
