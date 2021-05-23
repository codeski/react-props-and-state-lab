import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    
    let allPets = this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />)

    return <div className="ui cards"> {allPets} PET COMPONENT SHOULD GO HERE</div>
  }
}

export default PetBrowser
