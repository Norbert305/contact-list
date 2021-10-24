import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { useParams, Link } from "react-router-dom";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	let { id } = useParams();
	console.log(props);
	const editContact = store.contacts && store.contacts.find(contact => contact.id === props.match.params.id);
	console.log(editContact);

	const [edit, setEdit] = React.useState({
		full_name: editContact.full_name,
		email: editContact.email,
		phone: editContact.phone,
		address: editContact.address,
		id: editContact.id
	});

	console.log(edit);

	const saveStuff = () => {
		actions.updateContacts(edit);
	};

	const makeEdits = event => setEdit({ ...edit, [event.target.name]: event.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={makeEdits}
							value={edit.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={makeEdits}
							value={edit.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={makeEdits}
							value={edit.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={makeEdits}
							value={edit.address}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button type="button" className="btn btn-primary form-control" onClick={() => saveStuff()}>
							save
						</button>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	match: PropTypes.object,
	history: PropTypes.object
};
