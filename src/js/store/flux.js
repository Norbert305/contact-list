const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContacts: contacts => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
					method: "POST",
					body: JSON.stringify(contacts),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => getActions().getContacts())
					.catch(err => console.error(err));
			},
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Norbert305")
					.then(res => res.json())
					.then(data => setStore({ contacts: data }))
					.catch(err => console.error(err));
			},
			updateContacts: contacts => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contacts.id}`, {
					method: "PUT",
					body: JSON.stringify(contacts),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => getActions().getContacts())
					.catch(err => console.error(err));
			},

			deleteContacts: contactsId => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactsId}`, {
					method: "DELETE"
				}).then(() => getActions().getContacts());
			},
			addContactsFunction: contacts => {
				let newContacts = getStore().contacts;
				newContacts.push(contacts);
				setStore({ contacts: newContacts });
			}
		}
	};
};

export default getState;
