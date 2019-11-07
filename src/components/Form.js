import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DateForm = ({ handleChange, state }) => {
	return (
		<Form inline>
			<FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
				<Label for='date' className='mr-sm-2'>
					Change Date
				</Label>
				<Input
					onChange={handleChange}
					value={state}
					type='text'
					name='date'
					id='date'
					placeholder='year-month-day'
				/>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default DateForm;
