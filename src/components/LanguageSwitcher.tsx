import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const LanguageSwitcher = React.memo(function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <Container>
      <ButtonGroup>
        <LanguageButton 
          $active={i18n.language === 'en'}
          onClick={() => handleLanguageChange('en')}
          aria-label={t('language.english')}
        >
          EN
        </LanguageButton>
        <LanguageButton 
          $active={i18n.language === 'pt'}
          onClick={() => handleLanguageChange('pt')}
          aria-label={t('language.portuguese')}
        >
          PT
        </LanguageButton>
      </ButtonGroup>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow: hidden;
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.highlight : theme.colors.white};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 2.5rem;

  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.highlightLight : theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.highlight};
    outline-offset: -2px;
  }

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`; 