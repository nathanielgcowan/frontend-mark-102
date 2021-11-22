import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactList(props) {
    return (
        <div>
            { props.contacts.map(contact => 
                <div>
                    { contact.lastName }
                    { contact.firstName }
                </div>
            )}
        </div>
    )
}