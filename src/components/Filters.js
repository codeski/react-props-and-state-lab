import React from 'react'

class Filters extends React.Component {

  petType = (e) => {
    let petType = e.target.value
    this.props.onChangeType(petType)
  }

  handleClick = (e) => {
    this.props.onFindPetsClick(e)
  }
  
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.petType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
