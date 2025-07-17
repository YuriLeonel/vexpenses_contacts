import styled from 'styled-components'

export const ListWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing(3)};
    max-width: 100%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(2)};
    }
`

export const Group = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    
    @media (max-width: 768px) {
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }
`

export const GroupHeader = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    
    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.md};
        margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    }
`

export const ContactCard = styled.div`
    padding: ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    
    &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: ${({ theme }) => theme.spacing(2)};
        padding: ${({ theme }) => theme.spacing(2)};
    }
    
    strong {
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 0.25rem;
        display: block;
    }
    
    p {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.8;
        margin: 0;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    
    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }

    button {
        padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        border: 1px solid transparent;
        border-radius: ${({ theme }) => theme.radii.small};
        cursor: pointer;
        transition: all 0.2s ease;
        min-height: 44px;
        min-width: 44px;
        
        &:first-child {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
            
            &:hover {
                background-color: ${({ theme }) => theme.colors.secondary};
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            &:focus {
                outline: 2px solid ${({ theme }) => theme.colors.primary};
                outline-offset: 2px;
            }
        }
        
        &:last-child {
            background-color: transparent;
            color: ${({ theme }) => theme.colors.error};
            border-color: ${({ theme }) => theme.colors.error};
            
            &:hover {
                background-color: ${({ theme }) => theme.colors.error};
                color: ${({ theme }) => theme.colors.white};
                transform: translateY(-1px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            &:focus {
                outline: 2px solid ${({ theme }) => theme.colors.error};
                outline-offset: 2px;
            }
        }
        
        @media (max-width: 480px) {
            flex: 1;
            min-width: 0;
        }
    }
`

export const LoadingMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(8)};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    min-height: 300px;
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(6)};
        font-size: ${({ theme }) => theme.fontSizes.md};
        min-height: 200px;
    }
`

export const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(8)};
    text-align: center;
    min-height: 300px;
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(6)};
        min-height: 200px;
    }
    
    h2 {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
        
        @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.fontSizes.lg};
        }
    }
    
    p {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.8;
        max-width: 400px;
        line-height: 1.6;
        
        @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.fontSizes.sm};
            max-width: 300px;
        }
    }
`