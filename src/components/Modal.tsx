import React, { useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { MdClose } from 'react-icons/md'

ReactModal.setAppElement('#root')

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    ariaLabelledBy?: string
    children: React.ReactNode
}

const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
    const selectors = [
        'button',
        '[href]',
        'input',
        'select',
        'textarea',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]'
    ]
    
    return Array.from(container.querySelectorAll(selectors.join(', ')))
        .filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'))
        .filter((el) => (el as HTMLElement).offsetParent !== null) as HTMLElement[]
}

export function Modal({ isOpen, onClose, title, ariaLabelledBy, children }: ModalProps) {
    const { t } = useTranslation();
    const modalRef = useRef<HTMLDivElement>(null)
    const previousFocusRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement
            
            setTimeout(() => {
                if (modalRef.current) {
                    const focusableElements = getFocusableElements(modalRef.current)
                    if (focusableElements.length > 0) {
                        focusableElements[0].focus()
                    }
                }
            }, 100)
        } else {
            if (previousFocusRef.current) {
                previousFocusRef.current.focus()
            }
        }
    }, [isOpen])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen || !modalRef.current) return

            if (event.key === 'Escape') {
                onClose()
                return
            }

            if (event.key === 'Tab') {
                const focusableElements = getFocusableElements(modalRef.current)
                if (focusableElements.length === 0) return

                const firstElement = focusableElements[0]
                const lastElement = focusableElements[focusableElements.length - 1]

                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        event.preventDefault()
                        lastElement.focus()
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        event.preventDefault()
                        firstElement.focus()
                    }
                }
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentRef={(ref) => {
                if (ref) {
                    modalRef.current = ref
                }
            }}
            className="modal-content"
            overlayClassName="modal-overlay"
            ariaHideApp={true}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy || 'modal-title'}
        >
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle id={ariaLabelledBy || 'modal-title'}>
                        {title}
                    </ModalTitle>
                    <CloseButton
                        onClick={onClose}
                        aria-label={t('modal.close')}
                        type="button"
                    >
                        <CloseIcon aria-hidden="true">
                            <MdClose />
                        </CloseIcon>
                    </CloseButton>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
            </ModalContainer>
        </ReactModal>
    )
}

const ModalContainer = styled.div`
    position: relative;
    background: white;
    border-radius: 12px;
    padding: 0;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    
    @media (max-width: 767px) {
        max-height: 90vh;
        border-radius: 8px;
    }
    
    @media (min-width: 768px) and (max-width: 1199px) {
        max-height: 85vh;
    }
    
    @media (min-width: 1200px) {
        max-height: 80vh;
    }
    
    @media (min-width: 1440px) {
        max-height: 75vh;
    }
    
    @media (min-width: 1920px) {
        max-height: 70vh;
    }
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
    }
`

const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`

const CloseIcon = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        width: 100%;
        height: 100%;
    }
`

const ModalBody = styled.div`
    flex: 1;
    overflow-y: auto;
`
