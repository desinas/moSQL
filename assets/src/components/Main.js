import React from "react";
import Sidebar from "grommet/components/Sidebar";
import Split from "grommet/components/Split";
import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import CodeMirrorPanel from "./CodeMirrorPanel";

const Main = props => {
  return (
    <Split flex="right">
      <Sidebar colorIndex="neutral-1" fixed={false}>
        <Header pad="small" justify="between">
          <Title>MoSQL - JSON to SQL</Title>
        </Header>
      </Sidebar>
      <CodeMirrorPanel>
      </CodeMirrorPanel>
    </Split>
  );
};

export default Main;
