import { createGlobalStyle } from 'styled-components'
import wallpaperImg from '../assets/wallpaper-2560x1600.jpg'

export const  GlobalStyle = createGlobalStyle`
    :root {
        --black: #121214;
        --t-black-10: #0000001A;
        --t-black-20: #00000033;
        --t-black-30: #0000004D;
        
        --white: #FFFFFF;
        --t-white-30: rgba(255, 255, 255, 0.3);
        --t-white-10: #FFFFFF1A;
        --t-white-05: #FFFFFF0D;
        
        --gray-500: #242424;
        --gray-300: #464646;
        --gray-100: #A5A5A5;
        --gray-50: #E1E1E6;
        
        --green: #60D06E;
        --t-green-10: rgba(96, 208, 110, 0.1);

        --red: #E52E4D;
        --t-red-10: rgba(255, 0, 43, 0.1);

        --purple: #7C59DE;
        --orbit-purple: linear-gradient(189.6deg, rgba(124, 89, 222, 0.4) 9.15%, rgba(124, 89, 222, 0) 74.17%);

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-spacing: 0 0.75rem;

        font-family: 'Space Grotesk', 'Inter', sans-serif;
        color: var(--gray-50);
    }
    

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    
    
    body {
        background-image: url(${wallpaperImg});
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Space Grotesk', 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: var(--t-black-30);


        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 544px;

        background: var(--t-black-20);
        backdrop-filter: blur(64px);
        box-shadow: 5px 4px 16px rgba(0, 0, 0, 0.75);

        border: 1px solid var(--t-white-05);
        border-radius: 1rem;

        padding: 4rem 2rem 2rem;
        position: relative;
    }

    .react-modal-close {
        position: absolute;
        right: 1.25rem;
        top: 1.25rem;
        border: 0;
        height: 40px;
        background: transparent;
        border-radius: 0.5rem;

        transition: all 0.3s;
        
        &:hover {
            background: var(--t-white-05);
         }
    }

` 