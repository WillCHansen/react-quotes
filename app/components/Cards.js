import React from 'react';
import API from '../utils/API';

var NewCard = React.createClass({
	favoriteQuote: function(event){
		event.preventDefault();
		var self = this;
		API.favoriteQuote(this.props.data).then(function(){
			console.log("you just favorited a quote!");
			self.props.handleUpdate();
		});
	},
	deleteQuote: function(event){
		var self = this;
		event.preventDefault(event);
		API.deleteQuote(this.props.data._id).then(function(){
			console.log("you just deleted a quote!");
			self.props.handleUpdate();
		})
	},
	render: function(){
		return(
			<div className="col s3">
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">Quote:</span>
						<p>{this.props.data.text}</p>
					</div>
					<div className="card-action row">
						<button onClick={this.favoriteQuote} className="btn col s3"><i className="material-icons">grade</i></button> 
						<button onClick={this.deleteQuote} className="btn col s3 offset-s6"><i className="material-icons">delete</i></button>
					</div>
				</div>
			</div>
		)
	}
});

var Cards = React.createClass({

	handleUpdate: function(){
		this.props.getUpdate();
	},
	render: function(){
		console.log(this.props.cardList);
		var cardList;
		if(this.props.cardList.length>0){
		 cardList = this.props.cardList.map((data)=>
			<NewCard data={data} handleUpdate={this.handleUpdate} />);
		} else {
			cardList = [];
		}
		return(
			<div className="row">
				{cardList}
			</div>
			);
	}
});

export default Cards;