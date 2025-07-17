import { useState, useCallback } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { Contact, ContactForm as ContactFormType } from './features/contacts/types'
import { contactService } from './services/contactService'
import { ContactList } from './features/contacts/ContactList'
import { ContactForm } from './features/contacts/ContactForm'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Modal } from './components/Modal'


function App() {
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)	
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false);
  const [resultsCount, setResultsCount] = useState<number | undefined>(undefined);

  const handleCreate = useCallback(async (data: ContactFormType) => {
      await contactService.create(data)
      setRefresh(prev => !prev)
      setIsModalOpen(false)
  }, []);

  const handleUpdate = useCallback(async (data: ContactFormType) => {
    if (!editingContact) return;
      await contactService.update(editingContact.id, data)
      setEditingContact(null)
      setRefresh(prev => !prev)
      setIsModalOpen(false)
  }, [editingContact]);

  const handleEdit = useCallback((contact: Contact) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }, []);

  const openNewForm = useCallback(() => {
    setEditingContact(null)
    setIsModalOpen(true)
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
    setEditingContact(null)
  }, []);

  const handleResultsChange = useCallback((count: number) => {
    setResultsCount(count);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <AppContainer>
      <Header 
        search={search} 
        onSearchChange={handleSearchChange} 
        onNewContact={openNewForm}
        resultsCount={resultsCount}
      />

      <MainContent id="main-content">
        <PageTitle>
          <VisuallyHidden>VExpenses</VisuallyHidden>
          Contact Management
        </PageTitle>
        
        <ContactList 
          key={refresh.toString()} 
          onEdit={handleEdit} 
          search={search}
          onResultsChange={handleResultsChange}
        />
      </MainContent>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title={editingContact ? 'Edit Contact' : 'New Contact'}
        ariaLabelledBy="modal-title"
      >
        <ContactForm 
          initialValues={editingContact ?? undefined} 
          onSubmit={editingContact ? handleUpdate : handleCreate} 
        />
      </Modal>

      <ToastContainer 
        position="bottom-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        role="alert"
        aria-live="polite"
      />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;