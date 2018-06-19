import React, {Component} from 'react'

// Create new context for hole app
export const AppContext = React.createContext()

// const numberToRender = {
//         numberToRender: 0
// }

// Create provider for data access in any child component
export class AppProvider extends Component {
     constructor(props) {
        super(props);

        this.updateNumberToRender = (number) => {
          this.setState(state => ({
                numberToRender: number
              })
          );
        };


        this.state = {
          numberToRender: null,
          updateNumberToRender: this.updateNumberToRender
        };
    } 

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
