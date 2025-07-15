import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            lightPrimary: string
            secondary: string
            background: string
            border: string
            text: string
            error: string
        }
        spacing: (factor: number) => string
    }
} 