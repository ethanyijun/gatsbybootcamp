import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateStartChange = this.handleDateStartChange.bind(this);
        this.handleDateCompletionChange = this.handleDateCompletionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {history} = this.props;

        let newTrip = {
            Id: Math.floor(Math.random()*1000),
            Name:this.state.name,
            Description:this.state.description,
            DateStarted:this.state.dateStarted,
            DateCompleted:this.state.dateCompleted
        };
        axios.post("api/Trips/AddTrip",newTrip)
          .then(function (response) {
            history.push('/trips');
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleDateStartChange(event) {
        this.setState({dateStarted: event.target.value});
    }

    handleDateCompletionChange(event){
        this.setState({dateCompleted: event.target.value});
    }

    render(){
        return(
            <div className="trip-form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input type="text" className="form-control" onChange={this.handleNameChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea type="text" className="form-control" onChange={this.handleDescriptionChange} value={this.state.description}/>
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input 
                                type="date" 
                                className="form-control" 
                                onChange={this.handleDateStartChange}
                                value={this.state.dateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Date of completion:  </label>
                            <input 
                                type="date" 
                                className="form-control"
                                onChange={this.handleDateCompletionChange}
                                value={this.state.dateCompleted}
                            />
                            </div>
                        </div>
                    </div>      
                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}