import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/markdown/markdown';
import './_codeMirrorPanel.css';

// const builder = require('mongo-sql');

class CodeMirrorPanel extends Component {
  constructor() {
    super();
    const initialString = `{
  "type": "select",
  "table": "users"
}`;
    this.state = {
      codeLeft: initialString,
      mode: 'javascript'
    };
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    const { onWriteDown } = this.props;
    // const jsCode = JSON.parse(newCode.trim());
    // const result = builder.sql(jsCode);
    this.setState({
      codeLeft: newCode
    });
    onWriteDown(this.state.codeLeft);
  }

  render() {
    debugger
    const { codeRight } = this.props;
    const optionsLeft = {
      lineNumbers: true,
      mode: this.state.mode
    };

    const optionsRight = {
      lineNumbers: true,
      mode: 'text/x-sql'
    };

    return (
      <div className="row h-100">
        <div className="col">
          <CodeMirror
            value={this.state.codeLeft}
            onChange={this.updateCode}
            options={optionsLeft}
            autoFocus={true}
          />
        </div>
        <div className="col">
          <CodeMirror options={optionsRight} value={codeRight} />
        </div>
      </div>
    );
  }
}

export default CodeMirrorPanel;
