import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import Split from 'grommet/components/Split';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import './_codeMirrorPanel.css';

var builder = require('mongo-sql');

export default class CodeMirrorPanel extends Component {

    constructor() {
        super();
        this.state = {
            codeLeft: '// Code',
            codeRight: '// Result',
            mode: 'javascript'
        };
    }

    updateCode(newCode) {
        this.setState({
            codeLeft: newCode
        });

        
        var usersQuery = {
            type: 'select'
          , table: 'users'
          , where: { $or: { id: 5, name: 'Bob' } }
          };
          const result = builder.sql(usersQuery);
        console.log(this.state.codeLeft);
    }

    render(){
        const optionsLeft = {
            lineNumbers: true,
            mode: this.state.mode
        };
        const optionsRight = {
            lineNumbers: true,
            mode: 'markdown',
            readOnly: true
        }
        return (
            <Split>
                <CodeMirror value={this.state.codeLeft} onChange={this.updateCode.bind(this)} options={optionsLeft} />
                <CodeMirror value={this.state.codeRight} options={optionsRight} />
            </Split>
            
        );
    }
}