import React, { Component, type ReactNode } from 'react'
import styled from 'styled-components'
import { MdWarning } from 'react-icons/md'
import { withTranslation, type WithTranslation } from 'react-i18next'

interface Props extends WithTranslation {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error boundary caught an error:', error, errorInfo)
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <ErrorContainer role="alert" aria-live="assertive">
                    <ErrorIcon aria-hidden="true">
                        <MdWarning />
                    </ErrorIcon>
                    <ErrorTitle>{this.props.t('errorBoundary.title')}</ErrorTitle>
                    <ErrorMessage>
                        {this.props.t('errorBoundary.message')}
                    </ErrorMessage>
                    <ErrorActions>
                        <RetryButton onClick={this.handleRetry} type="button">
                            {this.props.t('errorBoundary.tryAgain')}
                        </RetryButton>
                        <ReloadButton onClick={() => window.location.reload()} type="button">
                            {this.props.t('errorBoundary.reloadPage')}
                        </ReloadButton>
                    </ErrorActions>
                    
                    {import.meta.env.DEV && this.state.error && (
                        <ErrorDetails>
                            <summary>{this.props.t('errorBoundary.errorDetails')}</summary>
                            <pre>{this.state.error.toString()}</pre>
                        </ErrorDetails>
                    )}
                </ErrorContainer>
            )
        }

        return this.props.children
    }
}

export default withTranslation()(ErrorBoundary)

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    padding: ${({ theme }) => theme.spacing(6)};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.medium};
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin: ${({ theme }) => theme.spacing(4)};
`

const ErrorIcon = styled.div`
    width: 4rem;
    height: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.error};
    
    svg {
        width: 100%;
        height: 100%;
    }
`

const ErrorTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.error};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const ErrorMessage = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`

const ErrorActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: center;
`

const RetryButton = styled.button`
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`

const ReloadButton = styled.button`
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.medium};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`

const ErrorDetails = styled.details`
    margin-top: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(2)};
    background-color: #f5f5f5;
    border-radius: ${({ theme }) => theme.radii.small};
    max-width: 800px;
    width: 100%;
    
    summary {
        cursor: pointer;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        margin-bottom: ${({ theme }) => theme.spacing(1)};
        
        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
    
    pre {
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        white-space: pre-wrap;
        word-break: break-word;
        color: ${({ theme }) => theme.colors.error};
        background-color: white;
        padding: ${({ theme }) => theme.spacing(2)};
        border-radius: ${({ theme }) => theme.radii.small};
        overflow-x: auto;
    }
` 