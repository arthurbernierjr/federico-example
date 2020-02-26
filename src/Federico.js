import React, {Component} from 'react';


class Federico extends Component {
    render () {
        return(
            <div> 
                {this.props.data.appName}
            </div>
        )
    }
}

export default Federico;