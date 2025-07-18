import React from 'react'
import styled from 'styled-components'
import { MdWarning } from 'react-icons/md'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    
    @media (max-width: 768px) {
        padding: 1.5rem;
        gap: ${({ theme }) => theme.spacing(2)};
        max-width: 100%;
    }
    
    @media (min-width: 1025px) {
        padding: 2.5rem;
        max-width: 650px;
    }
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        margin-bottom: 0.25rem;
    }

    input {
        padding: ${({ theme }) => theme.spacing(2)};
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.radii.small};
        font-size: ${({ theme }) => theme.fontSizes.md};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.text};
        transition: all 0.2s ease;
        
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px rgba(63, 161, 255, 0.1);
        }
        
        &[aria-invalid="true"] {
            border-color: ${({ theme }) => theme.colors.error};
            
            &:focus {
                border-color: ${({ theme }) => theme.colors.error};
                box-shadow: 0 0 0 3px rgba(224, 7, 7, 0.1);
            }
        }
        
        &:disabled {
            background-color: ${({ theme }) => theme.colors.border};
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
`

interface ErrorMessageProps {
    children: React.ReactNode;
    id?: string;
    role?: string;
    className?: string;
    showIcon?: boolean;
}

const ErrorMessageComponent: React.FC<ErrorMessageProps> = ({ 
    children, 
    id, 
    role = "alert", 
    className,
    showIcon = true
}) => {
    return (
        <ErrorMessageStyled id={id} role={role} className={className}>
            {showIcon && (
                <ErrorIcon aria-hidden="true">
                    <MdWarning />
                </ErrorIcon>
            )}
            {children}
        </ErrorMessageStyled>
    );
};

const ErrorMessageStyled = styled.span`
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`

const ErrorIcon = styled.span`
    width: 0.875rem;
    height: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        width: 100%;
        height: 100%;
    }
`

export const ErrorMessage = ErrorMessageComponent;

export const SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
    margin: ${({ theme }) => theme.spacing(3)} 0 ${({ theme }) => theme.spacing(2)} 0;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    
    &:first-child {
        margin-top: 0;
    }
`

export const SubmitButton = styled.button`
    padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(4)};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 48px;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 2px;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            transform: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
        font-size: ${({ theme }) => theme.fontSizes.md};
        min-height: 52px;
    }
`

export const ButtonText = styled.span`
    display: none;

    @media (min-width: 768px) {
        display: inline;
    }
`

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 44px;
    white-space: nowrap;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 2px;
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(1.5)};
        font-size: ${({ theme }) => theme.fontSizes.md};
        min-height: 48px;
        gap: 0;
        min-width: 48px;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 36px;
    white-space: nowrap;
    
    &:hover {
        background-color: #c41e3a;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 2px;
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(1.5)};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        min-height: 40px;
        gap: 0;
        min-width: 40px;
    }
`

export const FieldRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    
    > div:first-child {
        flex: 1;
    }
    
    > button {
        margin-bottom: 0.125rem;
        
        @media (max-width: 768px) {
            margin-bottom: 0;
        }
    }
`

export const SectionActions = styled.div`
    display: flex;
    justify-content: stretch;
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    
    > button {
        flex: 1;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        margin-top: ${({ theme }) => theme.spacing(2.5)};
        margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    }
`

export const FormActions = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(4)};
    padding-top: ${({ theme }) => theme.spacing(3)};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-top: ${({ theme }) => theme.spacing(3)};
        padding-top: ${({ theme }) => theme.spacing(2)};
    }
`

export const SecondaryButton = styled.button`
    padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(4)};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 48px;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        border-color: ${({ theme }) => theme.colors.text};
        transform: translateY(-1px);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        
        &:hover {
            background-color: transparent;
            border-color: ${({ theme }) => theme.colors.border};
            transform: none;
        }
    }
    
    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
        font-size: ${({ theme }) => theme.fontSizes.md};
        min-height: 52px;
        order: 2;
    }
` 

export const SectionField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: ${({ theme }) => theme.spacing(3)};

    &:last-child {
        margin-bottom: 0;
    }

    label {
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        margin-bottom: 0.25rem;
    }

    input {
        padding: ${({ theme }) => theme.spacing(2)};
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.radii.small};
        font-size: ${({ theme }) => theme.fontSizes.md};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.text};
        transition: all 0.2s ease;
        
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 3px rgba(63, 161, 255, 0.1);
        }
        
        &[aria-invalid="true"] {
            border-color: ${({ theme }) => theme.colors.error};
            
            &:focus {
                border-color: ${({ theme }) => theme.colors.error};
                box-shadow: 0 0 0 3px rgba(224, 7, 7, 0.1);
            }
        }
        
        &:disabled {
            background-color: ${({ theme }) => theme.colors.border};
            cursor: not-allowed;
            opacity: 0.6;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: ${({ theme }) => theme.spacing(2.5)};
    }
` 