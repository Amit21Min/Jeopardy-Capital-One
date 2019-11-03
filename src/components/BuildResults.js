import React from 'react';
import './BuildResults.css'


export default class BuildResults extends React.Component {

    render() {
        return (
            // table layout for the fetched results
            <div className="Info">
                <table>
                    <tbody>
                    <tr>
                        <td><b> Difficulty</b> </td>
                        <td>{this.props.Difficulty}</td>
                    </tr>

                    <tr>
                        <td><b> Category</b></td>
                        <td>{this.props.Category}</td>
                    </tr>

                    <tr>
                        <td><b> Question</b></td>
                        <td>{this.props.Question}</td>
                    </tr>

                    <tr>
                        <td><b> Answer</b></td>
                        <td>{this.props.Answer}</td>
                    </tr>

                    <tr>
                        <td><b> Air Date</b></td>
                        <td>{this.props.Air_Date.split("T")[0]}</td>
                    </tr>
                    </tbody>
                </table>

            <hr/>
            </div>
            
        )};
}