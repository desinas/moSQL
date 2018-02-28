import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import './_codeMirrorPanel.css';

var builder = require('mongo-sql');

class CodeMirrorPanel extends Component {

    constructor() {
        super();
        this.state = {
            codeLeft: '// Code',
            codeRight: '// Result',
            mode: 'javascript'
        };
        this.updateCode = this.updateCode.bind(this);
    }

    updateCode(newCode) {      
        var usersQuery = {
            type: 'select'
          , table: 'users'
          , where: { $or: { id: 5, name: 'Bob' } }
          };
          const result = builder.sql(usersQuery);
        this.setState({
            codeLeft: newCode,
            codeRight: result
        });
    }

    render(){
        const optionsLeft = {
            lineNumbers: true,
            mode: this.state.mode
        };
        const optionsRight = {
            lineNumbers: true,
            mode: 'markdown'
        };
        
        return (
            <Split>
                <CodeMirror value={this.state.codeLeft} onChange={this.updateCode} options={optionsLeft}  />
                <div className='ReactCodeMirror'>
				<textarea
					value={this.state.codeRight}
					autoComplete="off"
				/>
			</div>
            </Split>
            
        );
    }
}

export default CodeMirrorPanel;