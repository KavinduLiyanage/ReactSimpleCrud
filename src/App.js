import React, {Component} from 'react';
import _findIndex from "lodash.findindex";

import Table from "./components/Table";
import EditComponent from "./components/EditComponent";

class App extends Component{

    constructor() {
        super();

        this.state = {
            formData: [],
            currentData: {},
            editComponentData: {}
        };
    }

    onChangeFn = (event) => {
        this.setState({
            currentData: {
                ...this.state.currentData,
                [event.target.name]: event.target.value
            }
        })
    };

    addItem = () => {
        this.setState({
            formData: [
                ...this.state.formData,
                ...[this.state.currentData]
            ]
        }, () => {
            console.log(this.state.formData);
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

  render() {

      const headers = {
          first: "No",
          second: "First Name"
      };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">No</label>
                            <input
                                type="number"
                                className="form-control"
                                name={"no"}
                                onChange={(event) => this.onChangeFn(event)}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name={"fName"}
                                onChange={(event) => this.onChangeFn(event)}
                            />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={() => this.addItem()}>Submit</button>
                    </form>
                    <Table headers={headers} body={this.state.formData} isAction={true}
                           deleteItem={(event) => this.deleteItem(event.id)}
                           editItem={(event) => this.editItem(event.id)}
                           editBtnOtherProps={{
                               "data-toggle": "modal", "data-target":"#editComponent"
                           }}
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
