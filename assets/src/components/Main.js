import React from 'react';
import CodePanel from '../containers/CodePanel';

const Main = props => (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          mo-sql tester
        </a>
      </nav>
      <CodePanel />
    </div>
);

export default Main;
