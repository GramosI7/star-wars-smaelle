import React, { Component } from "react"
import Axios from "axios"

export default class Personnages extends Component {
    state = {
        dataPersonnages: [],
        dataInput: ""
    }

    seach = () => {
        Axios.get(`https://swapi.co/api/people?search=${this.state.dataInput}`)
            .then(response => {
                console.log("une recherche est faite !", response)
                this.setState({ dataPersonnages: response.data.results[0] })
            })
            .catch(error => console.log(error))
    }

    inputChange = e => {
        this.setState({ dataInput: e.target.value }, () => this.seach())
    }

    render() {
        return (
            <div>
                <label htmlFor="">Rechercher un personnages !</label>
                <br />
                <input
                    onChange={e => this.inputChange(e)}
                    value={this.state.dataInput}
                    type="text"
                />
                <h3>{this.state.dataPersonnages.name}</h3>
            </div>
        )
    }
}
