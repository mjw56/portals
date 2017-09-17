import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.portalNode = document.getElementById('portal');
    }

    render() {
        return [
            <div>Main</div>,
            ReactDOM.createPortal(
                <div>Portal</div>,
                this.portalNode
            )
        ];
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
