import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

export default class CodeMirrorPanel extends Component {

    constructor() {
        super();
        this.state = {
            name: 'moSQL Try it',
            code: '// Code'
        };
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }

    render(){
        let options = {
            lineNumbers: true
        };
        return (
            <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        );
    }
}