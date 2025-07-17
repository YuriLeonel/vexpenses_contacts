import React from 'react'
import { Modal } from './Modal'
import styled from 'styled-components'

interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title?: string
    message: string
    confirmText?: string
    cancelText?: string
    type?: 'danger' | 'warning' | 'info'
}

const ConfirmationContent = styled.div`
    padding: 1.5rem;
    text-align: center;
`

const Message = styled.p`
    margin: 0 0 2rem 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.5;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`

const BaseButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 100px;
    min-height: 44px;
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

const ConfirmButton = styled(BaseButton)<{ $type: 'danger' | 'warning' | 'info' }>`
    background-color: ${({ theme, $type }) => {
        switch ($type) {
            case 'danger':
                return theme.colors.error;
            case 'warning':
                return theme.colors.warning;
            case 'info':
                return theme.colors.primary;
            default:
                return theme.colors.error;
        }
    }};
    color: ${({ theme }) => theme.colors.white};
    
    &:hover:not(:disabled) {
        background-color: ${({ theme, $type }) => {
            switch ($type) {
                case 'danger':
                    return theme.colors.error;
                case 'warning':
                    return theme.colors.warning;
                case 'info':
                    return theme.colors.primary;
                default:
                    return theme.colors.error;
            }
        }};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:active:not(:disabled) {
        transform: translateY(0);
    }
`

const CancelButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.border};
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    &:active:not(:disabled) {
        transform: translateY(0);
    }
`

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'Confirm Action',
    message,
    confirmText = 'Delete',
    cancelText = 'Cancel',
    type = 'danger'
}) => {
    const handleConfirm = () => {
        onConfirm()
        onClose()
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            title={title}
            ariaLabelledBy="confirmation-modal-title"
        >
            <ConfirmationContent>
                <Message>
                    {message}
                </Message>
                <ButtonContainer>
                    <CancelButton 
                        onClick={onClose}
                        type="button"
                        aria-label={cancelText}
                    >
                        {cancelText}
                    </CancelButton>
                    <ConfirmButton 
                        onClick={handleConfirm}
                        type="button"
                        aria-label={confirmText}
                        $type={type}
                        autoFocus
                    >
                        {confirmText}
                    </ConfirmButton>
                </ButtonContainer>
            </ConfirmationContent>
        </Modal>
    )
} 