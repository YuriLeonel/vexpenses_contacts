import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
    line-height: 1.5;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    z-index: 9999;
    transition: top 0.2s ease;
    
    &:focus {
      top: 6px;
      outline: 2px solid ${({ theme }) => theme.colors.white};
      outline-offset: 2px;
    }
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  button, input, textarea, select {
    cursor: pointer;
    border: none;
    font: inherit;
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  button {
    min-height: 44px;
    min-width: 44px;
    background: transparent;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, textarea {
    cursor: text;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    
    &:hover, &:focus {
      text-decoration: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5em 0;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin: 0 0 1em 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    backdrop-filter: blur(2px);
    
    @media (max-width: 767px) {
      padding: 0.5rem;
      align-items: flex-start;
      padding-top: 2rem;
    }
    
    @media (max-height: 600px) {
      align-items: flex-start;
      padding-top: 1rem;
    }
  }

  .modal-content {
    position: relative;
    outline: none;
    max-width: 500px;
    width: 90%;
    max-height: 100%;
    animation: modalFadeIn 0.2s ease-out;
    
    @media (max-width: 767px) {
      width: 95%;
      max-width: 100%;
      margin-bottom: 2rem;
    }
    
    @media (min-width: 768px) and (max-width: 1199px) {
      max-width: 550px;
      width: 85%;
    }
    
    @media (min-width: 1200px) {
      max-width: 600px;
      width: 50%;
    }
    
    @media (min-width: 1440px) {
      max-width: 650px;
      width: 45%;
    }
    
    @media (min-width: 1920px) {
      max-width: 700px;
      width: 40%;
    }
  }
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;