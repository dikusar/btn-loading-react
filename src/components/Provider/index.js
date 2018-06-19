import React, {Component} from 'react'

// Create new context for hole app
export const AppContext = React.createContext()

const numberToRender = {
        numberToRender: 0
}

// Create provider for data access in any child component
export class AppProvider extends Component {
     constructor(props) {
        super(props);
        this.state = {
          numberToRender
        };
    } 

    render() {
        return (
            <AppContext.Provider value={this.state.numberToRender}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
