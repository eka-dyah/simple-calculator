import { Button } from "reactstrap";
import { button } from "../shared/button";

const Buttons = (props) => {
	return (
		<div className="container">
			<div className="row">
				{button.map((btn) => (
					<Button
						key={btn.id}
						className={`col-${btn.size} py-4 border border-secondary rounded-0`}
						color={btn.color}
						value={btn.value}
						onClick={props.clickHandler}
					>
						{btn.value}
					</Button>
				))}
			</div>
		</div>
	);
};
export default Buttons;
