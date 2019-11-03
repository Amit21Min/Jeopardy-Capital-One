import React from 'react';
import './SearchPage.css';
export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            category: null,
            minDate: null,
            maxDate: null,
            offset: null,
        }
    }
    // calls ./app.js fetchResults method
    handleSubmit = (event)=> {
        event.preventDefault();
        this.props.fetchResults(this.state.value, this.state.category, this.state.minDate, this.state.maxDate, this.state.offset); 
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>

                <div className ="main">
                        
                    <div className="welcome">
                        <h2>Welcome to Amit's Jeopardy question database!</h2>
                        <p><b>How does it work?</b><br/>
                        Your options to filter are: <br/>
                        The value of the question, the category id of the question, the minimum
                        or maximum air date, and an offset for the returned clues.
                        </p>
                        <a href="http://jservice.io"> Link to acceptable search formats </a>
                        
                    </div>


                    {/* labels and input boxes */}
                    <div className= "filters">
                        <div className = "value">
                            <label>Question Value</label>
                            <input type="text" name="value" placeholder="1000" onChange={this.handleInputChange}/>
                        </div>

                        <div className = "category">
                            <label>Category  </label>
                            <input type="text" name="category" placeholder="10,000" onChange={this.handleInputChange}/>
                        </div>

                        <div className = "minDate">
                            <label>MinDate </label>
                            <input type="text" name="minDate" placeholder="1950" onChange={this.handleInputChange}/>
                        </div>

                        <div className = "maxDate">
                            <label>MaxDate </label>
                            <input type="text" name="maxDate" placeholder="2050" onChange={this.handleInputChange}/>
                        </div>

                        <div className = "offset">
                            <label>Offset </label>
                            <input type="text" name="offset" placeholder="50" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    

                    <form onSubmit={this.handleSubmit}>
                        <p><button>Search</button></p>
                    </form>
            

                </div>

            </div>

        )
    }
}