import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Delete extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null,
        }

        this.HandleDelete = this.HandleDelete.bind(this);
        this.DeleteCancel = this.DeleteCancel.bind(this);
    }

    componentDidMount() {
        this.retriveTripData();
    }

    DeleteCancel() {
        this.props.history.push('/Trips/');
    }

    HandleDelete() {
        const {history} = this.props;
        var tripId = this.props.match.params.id;
        axios.delete("api/Trips/DeleteTrip/"+tripId)
          .then(function (response) {
            history.push('/trips');
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    retriveTripData() {
        var tripId = this.props.match.params.id;
        axios.get("api/Trips/SingleTrip/"+tripId).then(result => {
            const response = result.data;
            this.setState({
                name: response.name,
                description: response.description
            });
        })
    }

    render(){
        return(
            <div className="trip-form" >
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Trip information</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.name}</Card.Subtitle>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>
                        <Button onClick={this.UpdateCancel} variant="warning" >Cancel</Button>{' '}
                        <Button onClick={this.UpdateSave} variant="success">Save</Button>
                    </Card.Body>
                </Card> */}

                <Card className="text-center">
                    <Card.Header>Trip information</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>
                        <Button onClick={this.DeleteCancel} variant="warning" >Cancel</Button>{' '}
                        <Button onClick={this.HandleDelete} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}