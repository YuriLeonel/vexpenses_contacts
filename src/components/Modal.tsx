import ReactModal from 'react-modal'
import styled from 'styled-components'

ReactModal.setAppElement('#root')

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string;
    children: React.ReactNode
}

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
`

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                content: {
                    inset: 'auto',
                    maxWidth: '600px',
                    margin: 'auto',
                    borderRadius: '12px',
                    padding: '2rem',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1000,
                },
            }}
            ariaHideApp={false}
        >
            <ModalHeader>
                <h2>{title}</h2>
                <CloseButton onClick={onClose}>x</CloseButton>
            </ModalHeader>
            <div>{children}</div>
        </ReactModal>
    )
}
