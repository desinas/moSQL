import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/markdown/markdown';
import './_codeMirrorPanel.css';

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

  componentDidMount() {
    const { onWriteDown } = this.props;
    onWriteDown(this.state.codeLeft);
  }

  updateCode(editor, data, newCode) {
    const { onWriteDown } = this.props;
    this.setState({
      codeLeft: newCode
    });
    onWriteDown(this.state.codeLeft);
  }

  render() {
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
      <div >
        <div className="row">
          <div className="col">
            <CodeMirror
              value={this.state.codeLeft}
              onBeforeChange={(editor, data, value) => {
                this.setState({ codeLeft: value });
              }}
              onChange={this.updateCode}
              options={optionsLeft}
              autoFocus={true}
            />
          </div>
          <div className="col">
            <CodeMirror options={optionsRight} value={codeRight} />
          </div>
        </div>
        <div className="row bg-faded">
          <br/>
        </div>
        <div className="form-group row container-fluid">
            <textarea className="form-control" rows="5" value={codeRight}></textarea>
        </div>
      </div>
    );
  }
}

export default CodeMirrorPanel;
