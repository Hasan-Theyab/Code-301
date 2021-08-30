import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Child extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numberOfFavorites : 0
        }
    }

    incrementNumberOfFavorites = () => {
        this.setState({
            numberOfFavorites : this.state.numberOfFavorites + 1  
        })
    }
    
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementNumberOfFavorites}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            Number of favorites ❤️ : {this.state.numberOfFavorites}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Child;