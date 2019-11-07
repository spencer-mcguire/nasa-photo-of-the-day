import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DateForm = props => {
	return (
		<Form inline>
			<FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
				<Label for='date' className='mr-sm-2'>
					Change Date
				</Label>
				<Input type='text' name='date' id='date' placeholder='year-month-day' />
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default DateForm;

// <form>
// <label>See Another Date</label>
// <input type='text' placeholder='year-month-day'></input>
// <input type='submit' value='submit' />
// </form>
