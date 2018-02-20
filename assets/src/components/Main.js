import React, { Component, PropTypes } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';

export default class Main extends Component {
    render(){
        return (
            <Sidebar colorIndex='neutral-1' fixed={false}>
                <Header pad='medium' justify='between'>
                    <Title>
                        MoSQL
                    </Title>
                </Header>

                <Form>
  <FormField label='Sample label'>
    <textarea />
  </FormField>
</Form>
            </Sidebar>
        )
    }
}
