import { Component } from "react";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '',
            height: '',
            load: '',
            slenderness_limit: 50,
            maximum_allowable_stress: 1450,
            E: 1700000,
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearContent = this.clearContent.bind(this)
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    slender_test() {
        let width = this.state.width
        let height = this.state.height
        let slenderness = height / width

        if (slenderness <= this.state.slenderness_limit) {
            return (
                `<div class="alert alert-success" role="alert">
                <h4>Passed slenderness test!</h4>
            </div>`
            )
        } else {
            return (
                `<div class="alert alert-danger" role="alert">
                <h4>Failed slenderness test!</h4>
                <p>Possible solutions:</p>
                <ul>
                    <li>Increase the width</li>
                    <li>Reduce the height</li>
                </ul>
            </div>`
            )
        }
    }

    test_2() {
        let width = this.state.width
        let height = this.state.height
        let load = this.state.load
        let area = width ** 2
        let slenderness = height / width

        if (load <= (0.3 * this.state.E * area) / slenderness ** 2) {
            return (
                `<div class="alert alert-success" role="alert">
                    <h4>Passed second test!</h4>
                </div>`
            )
        } else {
            return (
                `<div class="alert alert-danger" role="alert">
                    <h4>Failed second test!</h4>
                    <p>Possible solutions:</p>
                    <ul>
                        <li>Increase the width</li>
                        <li>Reduce the height</li>
                    </ul>
                </div>`
            )
        }
    }

    max_load() {
        let area = this.state.width ** 2

        if (this.state.load <= area * this.state.maximum_allowable_stress) {
            return (
                `<div class="alert alert-success" role="alert">
                    <h4>Passed maximum load test!</h4>
                </div>`
            )
        } else {
            return (
                `<div class="alert alert-danger" role="alert">
                    <h4>Failed second test!</h4>
                    <p>Possible solutions:</p>
                    <ul>
                        <li>Increase the width</li>
                    </ul>
                </div>`
            )
        }
    }

    handleSubmit(event) {
        let clearBtn = document.querySelector("#clear")
        let slender = document.querySelector("#slenderness")
        let test2 = document.querySelector("#test-2")
        let maxLoad = document.querySelector("#max-load")

        clearBtn.classList.remove("invisible")

        slender.innerHTML = this.slender_test()
        test2.innerHTML = this.test_2()
        maxLoad.innerHTML = this.max_load()

        event.preventDefault()
    }

    clearContent(event) {
        let clearBtn = document.querySelector("#clear")
        let results = document.querySelector("#results")
        results.innerHTML = ''

        event.preventDefault()
        this.setState({
            width: '', height: '', load: ''
        })

        clearBtn.classList.add("invisible")
    }

    render() {
        return (
            <div className="main">
                <div className="container body text-center">
                    <h1 className="h3 mb-3 fw-normal">Structural Analysis</h1><br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-floating">
                            <input type="number" placeholder="Enter the width" className="form-control" id="floatingInput" required name="width" value={this.state.width} onChange={this.handleChange} />
                            <label htmlFor="floatingInput">Width</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" placeholder="Enter the height" className="form-control" id="floatingInput height" required name="height" value={this.state.height} onChange={this.handleChange} />
                            <label htmlFor="floatingInput">Height</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" placeholder="Enter the width" className="form-control" id="floatingInput load" required name="load" value={this.state.load} onChange={this.handleChange} />
                            <label htmlFor="floatingInput">Expected Load</label>
                        </div><br />
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={this.handleClick}>Submit</button>
                    </form>
                </div>
                <br /><br />
                <div id="results">
                    <div id="slenderness"></div>
                    <div id="test-2"></div>
                    <div id="max-load"></div>
                </div><br />
                <button id="clear" className="invisible btn btn-lg btn-secondary" onClick={this.clearContent}>Clear data</button>
            </div>
        )
    }
}


export default Home;