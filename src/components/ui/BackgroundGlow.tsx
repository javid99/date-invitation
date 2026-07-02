export default function BackgroundGlow() {
   return (
      <>
         <div
            className="
        absolute
        -top-32
        -left-20
        h-112
        w-md
        rounded-full
        bg-pink-300/30
        blur-[120px]
        "
         />

         <div
            className="
        absolute
        -bottom-32
        -right-20
        h-104
        w-104
        rounded-full
        bg-purple-300/20
        blur-[120px]
        "
         />
      </>
   );
}
