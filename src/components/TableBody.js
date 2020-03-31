import React, {Component} from 'react';

class TableBody extends Component {

    static defaultProps = {
        bodyValue: [],
        isAction: false,
        deleteItem: undefined,
        editItem: undefined
    }

    render() {
        return (
                <tbody>
                {
                    this.props.bodyValue.map((value, index) => {
                        return (
                        <tr key={index}>
                            <td>{value.fName}</td>
                            {
                                (this.props.isAction) ? (
                                    <td className={"p-0"}>
                                        <button type="button" className="btn btn-primary mt-1"
                                                onClick={(event)=>this.props.editItem({id:value.no})}
                                                data-toggle="modal" data-target="#editComponent"
                                        >Edit</button>
                                        <button type="button" className="btn btn-danger mt-1 ml-1"
                                                onClick={(event)=>this.props.deleteItem({id:value.no})}
                                        >Delete</button>
                                    </td>
                                ): null
                            }
                        </tr>
                        )
                    })
                }


                </tbody>

        );
    }
}

export default TableBody;