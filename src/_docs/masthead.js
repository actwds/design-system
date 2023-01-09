import React from "react";
import LinkTo from "@storybook/addon-links/react";

const Masthead = () => {
	return (
		<div className="act-masthead">
			<div className="act-masthead__container">
				<div className="act-masthead__content left">
					ACT Government Website Design System
				</div>
				<div className="act-masthead__content right">
					<a className="act-button act-button__primary act-button__xsmall act-button__icon-right" type="button" href="https://github.com/actwds/design-system" target="_blank" rel="noreferrer">
						GitHub
						<i className="fa-solid fa-arrow-up-right-from-square"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
