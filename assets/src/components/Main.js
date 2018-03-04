import React from "react";
import CodeMirrorPanel from "./CodeMirrorPanel";

const Main = props => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">mo-sql tester</a>
      </nav>
      <CodeMirrorPanel>
      </CodeMirrorPanel>
    </div>
  );
};

export default Main;
