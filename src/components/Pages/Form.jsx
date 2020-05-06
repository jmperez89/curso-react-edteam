import React, {Component} from "react"

class Form extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    changeDate() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h2>Formulario {this.props.name}</h2>
                <h4>Fecha actual: {Math.ceil(this.state.date/1000)}</h4>
                <form  id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" onChange={this.changeName}/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email" onChange={this.changeEmail}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }
    // Fase de MONTAJE
    componentDidMount() {
        let element = document.getElementById("form-element")
        console.log(element)

        this.dateInterval = setInterval(() => {
            this.changeDate()
            console.log(new Date())
        },1000)
    }
    // Fase de ACTUALIZACIÓN
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState)
    }
    // Fase de DESMONTAJE
    componentWillUnmount() {
        clearInterval(this.dateInterval)
    }
}

export default Form
