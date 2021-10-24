import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const addStuff = () => {
		actions.addContacts(add);
	};

	const [add, setAdd] = React.useState({
		full_name: null,
		email: null,
		phone: null,
		address: null,
		agenda_slug: "Norbert305"
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setAdd({ ...add, full_name: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setAdd({ ...add, email: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setAdd({ ...add, phone: event.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAdd({ ...add, address: event.target.value })}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button type="button" className="btn btn-primary form-control" onClick={() => addStuff()}>
							save
						</button>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
