const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContacts: contacts => {
				fetch("https://3000-coffee-mink-k8ciz2iv.ws-us18.gitpod.io/contact", {
					method: "POST",
					body: JSON.stringify(contacts),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => getActions().getContacts())
					.catch(err => console.error(err));
			},
			getContacts: () => {
				fetch("https://3000-coffee-mink-k8ciz2iv.ws-us18.gitpod.io/contact")
					.then(res => res.json())
					.then(data => setStore({ contacts: data }))
					.catch(err => console.error(err));
			},
			updateContacts: contacts => {
				fetch(`https://3000-coffee-mink-k8ciz2iv.ws-us18.gitpod.io/contact/${contacts.id}`, {
					method: "PUT",
					body: JSON.stringify(contacts),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => getActions().getContacts())
					.catch(err => console.error(err));
			},

			deleteContacts: contactsId => {
				fetch(`https://3000-coffee-mink-k8ciz2iv.ws-us18.gitpod.io/contact/${contactsId}`, {
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
