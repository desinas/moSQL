import React, { Component, PropTypes } from "react";
import FormField from "grommet/components/FormField";
import Form from "grommet/components/Form";
import './_textEditor.scss';

const TextEditor = props => {
    return (
        <Form>
            <FormField label="Write code here" htmlFor="item1">
                <textarea className="full-height" rows="5">

                </textarea>
            </FormField>
        </Form>
    );
}

export default TextEditor;