import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

export const Footer = React.memo(function Footer() {
  const { t } = useTranslation()

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterSection>
          <LogoSection>
            <VexpensesLogo src="/Vex_logo.png" alt="Vexpenses Logo" />
            <ProjectInfo>
              <CopyrightText>© 2025 Yuri Leonel</CopyrightText>
              <ChallengeText>{t('footer.techChallenge')}</ChallengeText>
            </ProjectInfo>
          </LogoSection>
        </FooterSection>

        <FooterSection>
          <TechStack>
            <TechTitle>{t('footer.builtWith')}</TechTitle>
            <TechList>
              <TechItem>React</TechItem>
              <TechItem>TypeScript</TechItem>
              <TechItem>Styled-components</TechItem>
            </TechList>
          </TechStack>
        </FooterSection>

        <FooterSection>
          <GitHubLink 
            href="https://github.com/YuriLeonel/vexpenses_contacts" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={t('footer.githubProject')}
          >
            <GitHubIcon aria-hidden="true">
              <FaGithub />
            </GitHubIcon>
            <span>{t('footer.viewOnGithub')}</span>
          </GitHubLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  )
})

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    &:first-child {
      align-items: flex-start;
    }
    
    &:last-child {
      align-items: flex-end;
    }
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`

const VexpensesLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`

const CopyrightText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ChallengeText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`

const TechTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`

const TechItem = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.radii.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
  
  @media (min-width: 768px) {
    padding: 0.875rem 1.125rem;
  }
`

const GitHubIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    
    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
` 