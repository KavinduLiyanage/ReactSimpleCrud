import React, {Component} from 'react';
import _findIndex from "lodash.findindex";

import Table from "./components/Table";
import EditComponent from "./components/EditComponent";

class App extends Component{

    constructor() {
        super();

        this.state = {
            formData: [],
            no:1,
            currentData: {},
            editComponentData: {}
        };
    }

    onChangeFn = (event) => {
        this.setState({
            currentData: {
                ...this.state.currentData,
                no:this.state.no-1,
                fName: event.target.value
            }
        })
    };

    addItem = () => {
        this.setState({
            currentData: {
                ...this.state.currentData,
                no:this.state.no++
            }
        })
        this.setState({
            formData: [
                ...this.state.formData,
                ...[this.state.currentData]
            ]
        })
    };

    deleteItem = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        temp.splice(record,1);
        this.setState({
            formData: temp
        })
    };

    editItem = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        this.setState( {
            editComponentData: temp[record]
        })
    };

    setUpdatedData = (data) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:data.no});

        temp.splice(record, 1, data);
        this.setState( {
            formData: temp
        })
    };
/*
    competeItem = (id) => {
        let temp = this.state.formData;
        let record = _findIndex(temp, {no:id});

        temp.splice(record,1,<strike>data</strike>);
        this.setState({
            formData: temp
        })
    };
*/
  render() {

    return (

        <div className={"container"}>
            <h3 align="center">Simple Crud App</h3>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Enter Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name={"fName"}
                                onChange={(event) => this.onChangeFn(event)}
                            />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => this.addItem()}>Add</button>
                    </form>
                    <Table body={this.state.formData} isAction={true}
                           deleteItem={(event) => this.deleteItem(event.id)}
                           editItem={(event) => this.editItem(event.id)}
                    />
                </div>
                <EditComponent editData={this.state.editComponentData}
                               setUpdatedData={(data) => this.setUpdatedData(data)}
                />
            </div>
        </div>
    );
  }

}

export default App;
