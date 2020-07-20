import React from "react";

const Display = (props) => {
	const { display, result, operator } = props;

	return (
		<div className="container border border-secondary bg-light text-monospace font-weight-bold"
			style={{ fontSize: 20 }}>
			<div className="row">
				<div className="col-12 border-bottom border-secondary p-4 ">
					{display}
				</div>
			</div>
			<div className="row" style={{ position: 'relative' }}>
				<div className="col-12 p-4">
					{result}
				</div>
				<p style={{ position: 'absolute', right: 20, top: 5 }}>{operator}</p>
			</div>
		</div>
	);
};

export default Display;
