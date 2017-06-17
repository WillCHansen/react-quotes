import React from 'react';
import API from '../utils/API';

var quoteForm = React.createClass({
	onSubmitForm: function(event){
		event.preventDefault();
        
		var self = this;
		API.saveQuote(document.getElementById("quoteText").value)
			.then(function(){
				self.props.getUpdate();
			})
	},

	render: function(){
		return(
			<div className="row">
				<form className="col s6 offset-s3" onSubmit={this.onSubmitForm}>
					<div className="row">
						<div className="input-field col s12">
							<textarea id="quoteText" className="materialize-textarea"></textarea>
							<label htmlFor="quoteText">add a quote</label>
						</div>
					</div>
					<button className="btn waves-effect waves-light" type="submit">Submit
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		);
	}
});

export default quoteForm;