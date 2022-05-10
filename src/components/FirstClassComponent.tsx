import React, { Component } from 'react';

interface IFirstClassComponentProps {
    title: string;
    onComplete: () => void;
}

export default class FirstClassComponent 
        extends Component<IFirstClassComponentProps> {
    render(): JSX.Element {
        return(<div>
            <h1>{this.props.title} from First Class Component</h1>
            <button onClick={this.props.onComplete}>Click me!</button>
        </div>);
    }
}