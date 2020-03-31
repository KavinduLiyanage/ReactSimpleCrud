import React, {Component} from 'react';
import TableBody from "./TableBody";

class Table extends Component {

    static defaultProps = {
        bodyValue: [],
        isAction: false,
        deleteItem: undefined,
        editItem: undefined
    }

    render() {

        return (
            <div>
                <h4 align="center">Name List</h4>
                <table className="table table-striped">

                    <TableBody bodyValue={this.props.body} isAction={this.props.isAction}
                               deleteItem={this.props.deleteItem}
                               editItem={this.props.editItem}
                               editBtnOtherProps={this.props.editBtnOtherProps}
                    />
                </table>
            </div>
        );
    }
}

export default Table;
