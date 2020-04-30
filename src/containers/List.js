import React, { Fragment } from "react"
import Card from "../components/Card/Card"

const API = process.env.API

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchTerm: "",
            error : "",
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=batman`)
        const resJson = await res.json()
        this.setState({ data: resJson.Search, loading:false })
    }
    async handleSubmit(e){
        e.preventDefault()
        if(!this.state.searchTerm){
            return this.setState({error: "write a name of a film"})
        }
        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const dataJson = await res.json()
        if(!dataJson.Search){
            return this.setState({error:"this film no exist"})
        }
        this.setState({data: dataJson.Search, error:"", searchTerm: ""})
    }
    render() {
        const {data,loading} =this.state
        if(loading){
            return <h3 className="text-light">loading...</h3>
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-2">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <input type="text"
                                className="form-control"
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                autoFocus 
                                value = {this.state.searchTerm}
                                placeholder="search" />

                        </form>
                        <p className = "text-white">
                            {
                                this.state.error ? this.state.error:""
                            }
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((movie,i) => {
                            return <Card movie={movie}key={i}></Card>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default List