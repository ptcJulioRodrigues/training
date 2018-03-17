'use-strict';

export const fetchContacts = () => fetch('/v0/contacts')
    .then(response => response.json())
    .catch(error => console.log('3', error));