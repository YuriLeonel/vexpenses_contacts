import React, { useEffect, useState, useMemo, useCallback } from 'react'
import type { Contact } from './types'
import { contactService } from '../../services/contactService'
import { groupContacts } from './utils'
import { toast } from 'react-toastify'
import { Actions, ContactCard, Group, GroupHeader, ListWrapper, LoadingMessage, EmptyMessage } from './ContactList.styles'
import { ConfirmationModal } from '../../components/ConfirmationModal'

type Props = {
    onEdit: (contact: Contact) => void;
    search: string;
    onResultsChange?: (count: number) => void;
};

export const ContactList = React.memo<Props>(function ContactList({ 
    onEdit, 
    search, 
    onResultsChange 
}) {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; contact: Contact | null }>({
        isOpen: false,
        contact: null
    })

    useEffect(() => {
       contactService.getAll().then((data) => {
        setContacts(data);
       }).catch((error) => {
        toast.error('Failed to fetch contacts')
        console.error(error)
       }).finally(() => setLoading(false))
    }, [])

    const handleDelete = useCallback((contact: Contact) => {
        setDeleteModal({
            isOpen: true,
            contact
        });
    }, []);

    const handleDeleteConfirm = useCallback(async () => {
        if (!deleteModal.contact) return;

        try {
            await contactService.delete(deleteModal.contact.id);
            setContacts(prev => prev.filter((contact) => contact.id !== deleteModal.contact!.id));
            toast.success('Contact deleted successfully');
        } catch (error) {
            toast.error('Failed to delete contact');
            console.error(error);
        }
    }, [deleteModal.contact]);

    const handleDeleteCancel = useCallback(() => {
        setDeleteModal({
            isOpen: false,
            contact: null
        });
    }, []);

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) => 
            `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase())
        );
    }, [contacts, search]);

    const groupedContacts = useMemo(() => {
        return groupContacts(filteredContacts);
    }, [filteredContacts]);

    useEffect(() => {
        if (onResultsChange) {
            onResultsChange(filteredContacts.length);
        }
    }, [filteredContacts.length, onResultsChange]);

    const handleEditContact = useCallback((contact: Contact) => {
        onEdit(contact);
    }, [onEdit]);

    if (loading) {
        return (
            <LoadingMessage role="status" aria-live="polite">
                Loading contacts...
            </LoadingMessage>
        );
    }

    if (contacts.length === 0) {
        return (
            <EmptyMessage role="status">
                <h2>No contacts found</h2>
                <p>Get started by adding your first contact.</p>
            </EmptyMessage>
        );
    }

    if (filteredContacts.length === 0 && search) {
        return (
            <EmptyMessage role="status">
                <h2>No contacts match your search</h2>
                <p>Try adjusting your search terms or add a new contact.</p>
            </EmptyMessage>
        );
    }

    return (
        <>
            <ListWrapper role="region" aria-label="Contacts list">
                {Object.entries(groupedContacts).map(([group, groupContacts]) => (
                    <Group key={group}>
                        <GroupHeader role="heading" aria-level={2}>
                            {group}
                        </GroupHeader>
                        <div role="list">
                            {groupContacts.map((contact) => (
                                <ContactCard key={contact.id} role="listitem">
                                    <div>
                                        <strong>{contact.firstName} {contact.lastName}</strong>
                                        <p>{contact.email}</p>
                                    </div>
                                    <Actions>
                                        <button 
                                            onClick={() => handleEditContact(contact)}
                                            aria-label={`Edit contact ${contact.firstName} ${contact.lastName}`}
                                            type="button"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(contact)}
                                            aria-label={`Delete contact ${contact.firstName} ${contact.lastName}`}
                                            type="button"
                                        >
                                            Delete
                                        </button>
                                    </Actions>
                                </ContactCard>
                            ))}
                        </div>
                    </Group>
                ))}
            </ListWrapper>
            
            <ConfirmationModal 
                isOpen={deleteModal.isOpen}
                onClose={handleDeleteCancel}
                onConfirm={handleDeleteConfirm}
                title="Delete Contact"
                message={
                    deleteModal.contact 
                        ? `Are you sure you want to delete ${deleteModal.contact.firstName} ${deleteModal.contact.lastName}?`
                        : ''
                }
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
            />
        </>
    )
});