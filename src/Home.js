import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Star-Wars</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos assumenda sunt perspiciatis obcaecati itaque aut
                    ipsum repudiandae a dolorem beatae eligendi quod, ut fuga
                    eveniet optio in fugiat autem aliquam?
                </p>
                <Link to="/personnages">Personnages</Link>
            </div>
        )
    }
}
