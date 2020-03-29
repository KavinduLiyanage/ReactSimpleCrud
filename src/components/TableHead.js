import React, {Component} from 'react';

class TableHead extends Component {

    static defaultProps = {
        headerValue1: [],
        isAction: false
    }

    render() {

        return (
            <thead>
                <tr>
                    <th scope="col">{this.props.headerValue1.first}</th>
                    <th scope="col">{this.props.headerValue1.second}</th>

                    {
                        (this.props.isAction) ? (
                            <th scope="col">Actions</th>
                        ): null
                    }
                </tr>
            </thead>

        );
    }
}

export default TableHead;