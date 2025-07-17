import React, { useCallback } from 'react'
import styled from 'styled-components'
import { SearchInput } from './SearchInput'

type Props = {
  search: string
  onSearchChange: (value: string) => void
  onNewContact: () => void
  resultsCount?: number
}

export const Header = React.memo<Props>(function Header({ 
  search, 
  onSearchChange, 
  onNewContact, 
  resultsCount 
}) {
  const handleNewContact = useCallback(() => {
    onNewContact();
  }, [onNewContact]);

  return (
    <HeaderContainer role="banner">
      <HeaderContent>
        <SearchInput 
          value={search} 
          onChange={onSearchChange}
          resultsCount={resultsCount}
          id="contact-search"
        />
        <ActionButton onClick={handleNewContact} type="button">
          <ButtonIcon aria-hidden="true">+</ButtonIcon>
          <ButtonText>New Contact</ButtonText>
        </ActionButton>
      </HeaderContent>
    </HeaderContainer>
  )
});

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`

const ActionButton = styled.button`
  padding: 0.875rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    padding: 0.875rem 1.5rem;
    min-width: auto;
    height: auto;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
`

const ButtonIcon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
`

const ButtonText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
` 