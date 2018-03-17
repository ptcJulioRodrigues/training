import { fetchContacts } from '../helper/serverApi/contacts';

export const fetch =  () => async dispatch =>
{
  const contacts = await fetchContacts();
  dispatch({ type: 'FETCH', data: contacts});
};