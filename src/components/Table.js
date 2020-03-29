import React, {Component} from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

class Table extends Component {

    static defaultProps = {
        headerValue1: [],
        bodyValue: [],
        isAction: false,
        deleteItem: undefined,
        editItem: undefined,
        editBtnOtherProps: {}
    }

    render() {

        return (
            <div>
                <table className="table table-striped">
                    <TableHead headerValue1={this.props.headers} isAction={this.props.isAction} />
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