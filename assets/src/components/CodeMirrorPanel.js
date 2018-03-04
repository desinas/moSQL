import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import './_codeMirrorPanel.css';

const builder = require('mongo-sql');

class CodeMirrorPanel extends Component {
  constructor() {
    super();
    const initialString = `{
  "type": "select",
  "table": "users"
}`;
    const jsCode = JSON.parse(initialString.trim());
    const result = builder.sql(jsCode);
    this.state = {
      codeLeft: initialString,
      codeRight: result,
      mode: 'javascript'
    };
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    const jsCode = JSON.parse(newCode.trim());
    const result = builder.sql(jsCode);
    this.setState({
      codeLeft: newCode,
      codeRight: result
    });
  }

  render() {
    const optionsLeft = {
      lineNumbers: true,
      mode: this.state.mode
    };

    return (
      <div className="row h-100">
        <div className="col">
          <CodeMirror value={this.state.codeLeft} onChange={this.updateCode} options={optionsLeft}
            autoFocus={true} />
        </div>
        <div className="col">
          <div className="ReactCodeMirror">
            <textarea value={this.state.codeRight} autoComplete="off" />
          </div>
        </div>
      </div>
    );
  }
}

export default CodeMirrorPanel;
