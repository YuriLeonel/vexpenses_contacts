import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  resultsCount?: number;
  id?: string;
};

export const SearchInput = React.memo<Props>(function SearchInput({ 
  value, 
  onChange, 
  placeholder,
  resultsCount,
  id = 'search-input'
}) {
  const { t } = useTranslation();
  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, [onChange]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      onChange('');
    }
  }, [onChange]);

  return (
    <SearchContainer>
      <SearchLabel htmlFor={id}>
        {t('header.search')}
      </SearchLabel>
      <SearchInputContainer>
        <SearchField
          id={id}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || t('header.search')}
          aria-describedby={resultsCount !== undefined ? `${id}-results` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck="false"
        />
        {value && (
          <ClearButton
            type="button"
            onClick={handleClear}
            aria-label={t('header.search')}
          >
            <ClearIcon aria-hidden="true">×</ClearIcon>
          </ClearButton>
        )}
      </SearchInputContainer>
      {resultsCount !== undefined && (
        <SearchResults
          id={`${id}-results`}
          aria-live="polite"
          aria-atomic="true"
        >
          {value ? (
            resultsCount === 0 ? t('header.noResults') : t('header.resultsCount', { count: resultsCount })
          ) : ''}
        </SearchResults>
      )}
    </SearchContainer>
  );
});

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  @media (max-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchField = styled.input`
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.medium};
  font-size: 1.125rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(63, 161, 255, 0.1);
  }
  
  &::placeholder {
    color: #666;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem;
    font-size: 1rem;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ClearIcon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 300;
`;

const SearchResults = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.25rem;
  min-height: 1.2em;
  
  @media (max-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
