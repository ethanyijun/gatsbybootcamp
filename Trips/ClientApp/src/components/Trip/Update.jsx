import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null,
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateStartChange = this.handleDateStartChange.bind(this);
        this.handleDateCompletionChange = this.handleDateCompletionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.UpdateCancel = this.UpdateCancel.bind(this);
    }

    componentDidMount() {
        this.retriveTripData();
    }

    UpdateCancel() {
        this.props.history.push('/Trips/');
    }

    retriveTripData() {
        var tripId = this.props.match.params.id;
        axios.get("api/Trips/SingleTrip/"+tripId).then(result => {
            const response = result.data;
            this.setState({
                name: response.name,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0,10),
                dateCompleted: response.dateCompleted? new Date(response.dateCompleted).toISOString().slice(0,10): null,
            });
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const {history} = this.props;
        var tripId = this.props.match.params.id;
        let editedTrip = {
            Name:this.state.name,
            Description:this.state.description,
            DateStarted:this.state.dateStarted,
            DateCompleted:this.state.dateCompleted
        };
        axios.put("api/Trips/UpdateTrip/"+tripId,editedTrip)
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
                        <Button onClick={this.UpdateCancel} variant="warning" >Cancel</Button>{' '}
                        <Button type="submit" variant="success">Save</Button>
                    </div>
                </form>
            </div>
        )
    }
}