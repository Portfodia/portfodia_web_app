import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens:{
            xs: "300px",
            sm: "640px",
            md: "768px",
            xl: "1280px",
            lg: "1335px",
            ["2xl"]: "1530px" 
          },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            height: {
                'h-screen:': '100vh',
                'h-70': '70%',
            },
            fontSize: {
                'login': '17px'
            },
            colors: {
                'primary': '#7439E7',
                'secondary': '#FB6D3A',
                'bg': '#f2ebff',
                'graybtn': '#626262',
                'white': '#ffffff',
                'lightPurple': '#C3A5FF',
                'middlePurple': '#7E3BFF',
                'deepPurple': '#3B00AF',
                'black': '#000000',
                'lightGray': '#F6F6F6',
                'middleGray': '#ECE2FF',
                'deepGray':'#676767',
                'deepBlue': '#402C67',
                'green': '#00C75C',
                'lightOrange': "#FFF6D7",
                'thinPurple': '#EBE1FF',
                'boldPurple': '#27004E',
                'lightGreen': '#00C75C',
            },
            width: {
                'google': '1px'
            },
            fontFamily: {
                'satoshi': ['Satoshi', 'sans-serif'],

              }
        },
    },
    plugins: [],
};
export default config;
