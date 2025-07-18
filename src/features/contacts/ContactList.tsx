import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation();
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
        toast.error(t('messages.error'))
        console.error(error)
       }).finally(() => setLoading(false))
    }, [t])

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
            toast.success(t('messages.contactDeleted'));
        } catch (error) {
            toast.error(t('messages.error'));
            console.error(error);
        }
    }, [deleteModal.contact, t]);

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
                {t('messages.loading')}
            </LoadingMessage>
        );
    }

    if (contacts.length === 0) {
        return (
            <EmptyMessage role="status">
                <h2>{t('messages.noContacts')}</h2>
                <p>{t('messages.getStarted')}</p>
            </EmptyMessage>
        );
    }

    if (filteredContacts.length === 0 && search) {
        return (
            <EmptyMessage role="status">
                <h2>{t('header.noResults')}</h2>
                <p>{t('messages.adjustSearch')}</p>
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
                                            aria-label={`${t('contact.edit')} ${contact.firstName} ${contact.lastName}`}
                                            type="button"
                                        >
                                            {t('contact.edit')}
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(contact)}
                                            aria-label={`${t('contact.delete')} ${contact.firstName} ${contact.lastName}`}
                                            type="button"
                                        >
                                            {t('contact.delete')}
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
                title={t('confirmation.deleteTitle')}
                message={
                    deleteModal.contact 
                        ? `${t('confirmation.deleteContact')} ${deleteModal.contact.firstName} ${deleteModal.contact.lastName}?`
                        : ''
                }
                confirmText={t('confirmation.confirm')}
                cancelText={t('confirmation.cancel')}
                type="danger"
            />
        </>
    )
});