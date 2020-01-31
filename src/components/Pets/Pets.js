import React from 'react';
import { connect } from 'react-redux';
import './Pets.scss';

class Pets extends React.Component {
    render() {
        return (
            <div className="Pets">
                <h1>Pets Page</h1>
                <div>
                    <div className="row">
                { Object.values(this.props.pets).map(pet => {
                    return (
                            <div className="col" key={pet.id}>
                                <h3 className="name">{pet.name}</h3>
                                <p>{pet.breed}</p>
                                <p>{pet.age}, {pet.gender}</p>
                            </div>
                            )
                })}
                    </div>
                </div>
            )
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       pets: state.pets
    }
    // Object key => "0", "1", Object.values [{id:.., name:...}]
}

export default connect(mapStateToProps)(Pets);