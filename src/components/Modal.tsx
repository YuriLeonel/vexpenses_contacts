import ReactModal from 'react-modal'
import styled from 'styled-components'

ReactModal.setAppElement('#root')

const StyledModal = styled(ReactModal)`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    margin: 0 auto;
`

interface ModalProps {
    isOpen: boolean
    onRequestClose: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
        >
            {children}
        </StyledModal>
    )
}