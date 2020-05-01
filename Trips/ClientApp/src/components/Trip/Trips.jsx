import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export class Trips extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            trips: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount() {
        this.populateTripsData();
    }

    handleUpdate(tripId) {
        this.props.history.push('/Update/'+tripId);
    }

    handleDelete(tripId) {
        this.props.history.push('/Delete/'+tripId);
    }

    renderAllTripsTable(trips) {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        trips.map(trip => 
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toISOString().slice(0,10)}</td>
                            <td>{trip.dateCompleted? new Date(trip.dateCompleted).toISOString().slice(0,10): '-'}</td>
                            <td>
                            <div className="btn-container">
                                <Button variant="primary" onClick={()=>this.handleUpdate(trip.id)}>Update</Button>
                                <Button variant="danger" onClick={()=>this.handleDelete(trip.id)}>Delete</Button>
                            </div>
                            </td>
                        </tr>
                        ) 
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : ( this.state.failed? (
            <div className="text-danger">
                <em>{this.state.error}</em>
            </div>
        ):
            (this.renderAllTripsTable(this.state.trips)) 
        )

        return (
            <div>
                <h1>All Trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        )
    } 
    
    async populateTripsData() {
        axios.get("api/Trips/GetAllTrips").then(result => {
            const response = result.data;
            this.setState({
                trips: response, loading: false, failed: false, error:''
            });
        }).catch(error => {
            this.setState({
                trips: [], loading: false, failed: true, error:"Trips could not be loaded."
            });
        })
    }
}