import { config } from 'fetch-mock'
import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = (e) => {
    let url
    if (this.state.filters.type === 'all') {
      url = "/api/pets"
    } else { url = '/api/pets?type=' + this.state.filters.type }
    this.fetchPets(url)
  }

  fetchPets = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState( {pets: data} ))
    .then(console.log(this.state))
  }

  changeType = (type) => {
    this.state.filters.type = type
  }

  adopted = (id) => {
    let petSelect = this.state.pets.find(pet => pet.id === id)
    const newPets = this.state.pets.filter(pet => pet !== petSelect)
    
    petSelect.isAdopted = true
    newPets.push(petSelect)
    console.log(newPets)
    this.setState({pets: newPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adopted} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// onChangeType={this.filters.type} onFindPetsClick={this.findPets}

export default App
