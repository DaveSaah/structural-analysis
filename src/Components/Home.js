import { Component } from "react";


// myForm.addEventListener("submit", onsubmit);

// function onsubmit(e) {
//     e.preventDefault();
//     if(nameInput.value === "" || emailInput.value === ""){
//         msg.innerHTML = "Please enter all fields!";
//         setTimeout(() => msg.remove(), 3000);
//     }
//     else {
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//         userList.appendChild(li);

//         //Clear fields
//         nameInput.value = "";
//         emailInput.value = "";
//     }
// }


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { width: '', height: '', load: '', slenderness_limit: 50, maximum_allowable_stress: 1450, E: 1700000,  }


        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        console.log(slenderness, this.state.slenderness_limit)
    }

    test_2() {
        let width = this.state.width
        let height = this.state.height
        let load = this.state.load
        let area = width ** 2
        let slenderness = height / width

        console.log(load, slenderness, area)
    }

    max_load() {
        let area = this.state.width ** 2
        console.log(this.state.load, area, this.state.maximum_allowable_stress)
    }

    handleSubmit(event) {
        // let results = document.querySelector(".results")

        this.slender_test()
        this.test_2()
        this.max_load()

        // results.innerHTML = 
        event.preventDefault()
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
                <div className="results"></div>
            </div>
        )
    }
}


export default Home;