/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006837', // Verde Principal (Logotipo)
          hover: '#00522b',
        },
        secondary: {
          DEFAULT: '#0B2545', // Azul Secundario (Estructural y Tipografía)
          hover: '#05162b',
        },
        accent: {
          DEFAULT: '#F37021', // Naranja de Acento (Interacción y Enfoque)
          hover: '#db5d12',
        },
        bgLight: '#F4F5F7',    // Gris Claro de fondo
      },
      fontFamily: {
        title: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 8px 30px rgb(0 0 0 / 0.12)',
        glass: '0 8px 32px 0 rgba(11, 37, 69, 0.08)',
      }
    },
  },
  plugins: [],
}
