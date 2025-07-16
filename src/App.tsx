import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { Contact, ContactForm as ContactFormType } from './features/contacts/types'
import { contactService } from './services/contactService'
import { ContactList } from './features/contacts/ContactList'
import { ContactForm } from './features/contacts/ContactForm'
import styled from 'styled-components'
import { SearchInput } from './components/SearchInput'
import { Modal } from './components/Modal'


function App() {
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)	
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false);

  const handleCreate = async (data: ContactFormType) => {
      await contactService.create(data)
      setRefresh(!refresh)
      setIsModalOpen(false)
  }

  const handleUpdate = async (data: ContactFormType) => {
    if (!editingContact) return;
      await contactService.update(editingContact.id, data)
      setEditingContact(null)
      setRefresh(!refresh)
      setIsModalOpen(false)
  }

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }

  const openNewForm = () => {
    setEditingContact(null)
    setIsModalOpen(true)
  }

  return (
    <Container>
      <h1>Vexpenses Contacts</h1>

      <ActionsRow>
        <button onClick={openNewForm}>New Contact</button>
        <SearchInput value={search} onChange={setSearch} />
      </ActionsRow>

      <ContactList key={refresh.toString()} onEdit={handleEdit} search={search} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingContact ? 'Edit Contact' : 'New Contact'}>
        <ContactForm initialValues={editingContact ?? undefined} onSubmit={editingContact ? handleUpdate : handleCreate} />
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  )
}

export default App

const Container = styled.div`
  padding: 2rem;
`;

const ActionsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 600px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    border: none;

    &:hover {
      opacity: 0.9;
    }
  }
`;