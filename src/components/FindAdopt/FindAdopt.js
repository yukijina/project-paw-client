import React from 'react';
import './FindAdopt.scss';
import { searchPetFormAction, searchPet } from '../../actions/searchPetFormAction';
import { connect } from 'react-redux'


class FindAdopt extends React.Component {

    // select pet species - radio button
    selectPet = event => {
        const{ name, id } = event.target
        //send select data to action
        this.props.searchPetFormAction({...this.props.petData, [name]: id })
    }

    // pet information - input text
    inputChange = (event) => {
        const { name, value } = event.target
        this.props.searchPetFormAction({...this.props.petData, [name]: value })   
    }

    //onSubmit - search pet result
    submitPetInfo = (event) => {
        event.preventDefault()
        this.props.searchPet(this.props.petData)
    }

    render() {


        return(
            <div className="FindAdopt">
                <div className="FindAdopt__wrapper">
                    {/* First row 1 column */}
                    <div className="r1">
                        <h2>FIND AND ADOPT</h2>
                    </div>

                    <form onSubmit={this.submitPetInfo}>
                    {/* Second row 3 columns */}
                    <div className="r2c1">
                        <div className="selectPet-wrapper">
                            <div className="selectPet-r1">
                                <h3>SELECT A PET</h3>
                            </div>

                            {/* Pet Select Column */}
                            {/* Dog */}
                            <div className="selectPet-r2c1">
                                <div className="form__radio-group">
                                    <input onClick={this.selectPet} type="radio" name="species" id="dog" className="form__radio-input" />
                                    <label htmlFor="dog" className="form__radio-label">
                                    <span className="form__radio-button">dog icon</span>
                                    Dog    
                                    </label>
                                </div>
                            </div>
                            {/* Cat */}
                            <div className="selectPet-r2c2">
                                <div className="form__radio-group">
                                    <input onClick={this.selectPet} type="radio" name="species" id="cat" className="form__radio-input" />
                                    <label htmlFor="cat" className="form__radio-label">
                                    <span className="form__radio-button">cat icon</span>
                                    Cat   
                                    </label>
                                </div>
                            </div>
                            {/* Others */}
                            <div className="selectPet-r3">
                                <div className="form__radio-group">
                                    <input onClick={this.selectPet} type="radio" name="species" id="others" className="form__radio-input" />
                                    <label htmlFor="others" className="form__radio-label">
                                    <span className="form__radio-button">ohter icon</span>
                                    Other animals   
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Location */}
                    <div className="r2c2">
                        <div className="form__input-group">
                            <h3>LOCATION</h3>
                            <input onChange={this.inputChange} type="text" name="city" className="form__input-input"/>
                            <label htmlFor="city" className="form__input-label"></label>
                        </div>
                    </div>
                    {/* Age */}
                    <div className="r2c3">
                         <div className="form__input-group">
                            <h3>AGE</h3>
                            <input onChange={this.inputChange} type="number" name="age" className="form__input-input"/>
                            <label htmlFor="age" className="form__input-label"></label>
                        </div>
                    </div>
                    {/* Third row */}
                    {/* Breed */}
                    <div className="r3c2">
                        <div className="form__input-group">
                            <h3>BREED</h3>
                            <input onChange={this.inputChange} type="text" name="breed" className="form__input-input"/>
                            <label htmlFor="breed" className="form__input-label"></label>
                        </div>
                    </div>   
                    {/* Gender */}
                    <div className="r3c3">
                        <div className="form__input-group">
                            <h3>GENDER</h3>
                            <input onChange={this.inputChange} type="text" name="gender" className="form__input-input"/>
                            <label htmlFor="gender" className="form__input-label"></label>
                        </div>
                    </div>

                    {/* Forth row 1 column */}
                    <div className="r4">
                        <input onClick={this.petSearch} type="submit" value="Search" className="btn btn--white"></input>
                    </div>
                </form>
                </div>
                
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        petData: state.searchPetForm
    }
}

export default connect(mapStateToProps, { searchPetFormAction, searchPet })(FindAdopt);