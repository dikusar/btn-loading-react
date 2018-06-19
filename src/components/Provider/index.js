import React, {Component} from 'react'

// Create new context for hole app
export const AppContext = React.createContext()

const delay = (ms) => new Promise(resolve => {
    return setTimeout(resolve, ms);
});


// Create provider for data access in any child component
export class AppProvider extends Component {

    setDefaultState() {
        this.setState({
            numberToRender: null,  
            isAmimate: false
        });
    }

    async updateNumberToRender(number, ms) {
        const isZero = +number === 0;
        if(isZero) {
                // Stop animation if button with '0' number was pressed
                this.setState({isAmimate: false});
                return;
            }

        // Start animation
        this.setState({isAmimate: true});
        
        // Waiting for animation ending
        await delay(ms);

        // Render new number value
        this.setState({numberToRender: number});

        
        // Showing for some moment finishing animation state with updated number
        await delay(1000);

        // Then set default state
        this.setDefaultState();
        
    }

     constructor(props) {
        super(props);

        const { spinnerTimeAnimation } = props.theme;

        // Context handler pass down to 'Button' component to handle button click
        this.handleBtnClick = (number) => {
            this.updateNumberToRender(number, spinnerTimeAnimation);
        };


        this.state = {
          numberToRender: null,
          handleBtnClick: this.handleBtnClick,
          isAmimate: false
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
