import React, {Component} from 'react';
import Modal from "./Modal";

class EditComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                no:"",
                fName:""
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevProps.editData.no !== this.props.editData.no) {
            this.setState( {
                formData: this.props.editData
            })
        }
    }

    onChangeFn = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    };

    setUpdatedData = () => {
        this.props.setUpdatedData(this.state.formData)
    };

    render() {
        return (
            <Modal modalId={"editComponent"}
                   modalTitle={"Edit Record"}
                   saveItem={this.setUpdatedData}
            >
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Edit Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name={"fName"}
                            value={this.state.formData.fName}
                            onChange={(event) => this.onChangeFn(event)}
                        />
                    </div>
                </form>
            </Modal>
        );
    }
}

export default EditComponent;
