import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            lightPrimary: string
            secondary: string
            secondaryLight: string
            highlight: string
            highlightLight: string
            background: string
            border: string
            text: string
            white: string
            error: string
            success: string
            warning: string
        }
        spacing: (factor: number) => string
        radii: {
            small: string
            medium: string
            large: string
        }
        fontSizes: {
            sm: string
            md: string
            lg: string
            xl: string
        }
        fontWeights: {
            normal: number
            medium: number
            bold: number
        }
    }
} 