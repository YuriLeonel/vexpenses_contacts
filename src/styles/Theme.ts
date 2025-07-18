export const theme = {
    colors: {
        primary: '#3fa1ff',
        lightPrimary: '#8CC7FF',
        secondary: '#0a7ee3',
        secondaryLight: '#62B2F8',
        highlight: '#F7841E',
        highlightLight: '#fab578',
        background: '#F9F9F9',
        border: '#E0E0E0',
        text: '#000',
        white: '#FFFFFF',
        error: '#E00707',
        success: '#008C1F',
        warning: '#F6AC3C',
    },
    spacing: (factor: number) => `${factor * 8}px`,
    radii: {
        small: '4px',
        medium: '8px',
        large: '16px',
    },
    fontSizes: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
}