import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(3)};
    max-width: 600px;
    margin: auto;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    input {
        padding: ${({ theme }) => theme.spacing(1.5)};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.radii.small};
        font-size: ${({ theme }) => theme.fontSizes.md};
        
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }

    span {
        color: ${({ theme }) => theme.colors.error};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    button {
        align-self: flex-start;
        padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.text};
        border-radius: ${({ theme }) => theme.radii.small};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        
        &:hover {
            opacity: 0.8;
        }
    }
`

export const SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-top: ${({ theme }) => theme.spacing(2)};
`

export const SubmitButton = styled.button`
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-top: ${({ theme }) => theme.spacing(2)};
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPrimary};
        opacity: 0.9;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
` 