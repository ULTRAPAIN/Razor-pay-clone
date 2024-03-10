/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mullish","sans-serif"],
      },
      colors:{
        deepblue:"#02042a",
        lightblue:"#2b84ea",
        lightblue300:"#4b94ed",
        gray2:"#525a76",
        lightblue500:"#0b72e7",
        greenlight:"#61cea6",
        grayText:"#818597",
        lighgray:"#e2e2e2",
        grayblue:"#244a6c",
        deepbluehead:"#162f56",
        content:"#181C2E",
      },
      backgroundImage: {
        'feature-setion2': "url('../assets/feature-section-2BG.svg')",
        'corporate-cards':"url('../assets/instant-settlement-bg.svg')",
        'corporate-cards-hover':"url('../assets/instant-settlement-bghover.svg')",
        'upi-autopay':"url('../assets/upi-autopay-bg.svg')",
        'upi-autopay-hover':"url('../assets/upi-autopay-hoverbg.svg')",
        'magic-checkout':"url('../assets/magic-checkout-bg.svg')",
        'magic-checkout-hover':"url('../assets/magic-checkout-hoverbg.svg')",
        'payment-button':"url('../assets/payment-button-bg.svg')",
        'payment-button-hover':"url('../assets/payment-button-hoverbg.svg')",
        'feature-section-4':"url('../assets/core-features-sectionBg.svg')",
    },
  },
  plugins: [],
}
}


