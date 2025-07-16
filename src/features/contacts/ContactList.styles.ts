import styled from 'styled-components'

export const ListWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing(3)};
    max-width: 700px;
    margin: auto;
`

export const Group = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`

export const GroupHeader = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 4px;
`

export const ContactCard = styled.div`
    padding: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radii.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
`

export const Actions = styled.div`
    display: flex;
    gap: 8px;

    button {
        font-size: 0.9rem;
        background: none;
        color: ${({ theme }) => theme.colors.primary};

        &:hover {
            text-decoration: underline;
        }
    }
`