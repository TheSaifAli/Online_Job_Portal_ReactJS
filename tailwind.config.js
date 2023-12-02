/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      keyframes:{
        alertAnime:{
          'from':{
                opacity:'0',
                top:'-10%'
          },
          'to':{
              opacity:'1',
              top:'0'
          },
        alertAnimeExit:{
          'from':{
                opacity:'1',
                top:'0'
          },
          'to':{
              opacity:'1',
              top:'-10%'
          }
        }
      }
    },
  },
  plugins: [],
}
}
