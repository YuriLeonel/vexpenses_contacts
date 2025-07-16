export const theme = {
    colors: {
        primary: '#00326B',
        lightPrimary: '#158CF6',
        secondary: '#F7841E',
        background: '#F9F9F9',
        border: '#E0E0E0',
        text: '#333',
        error: '#D32F2F',
        success: '#2E7D32',
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