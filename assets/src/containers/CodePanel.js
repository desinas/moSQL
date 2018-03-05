import { connect } from 'react-redux';
import { convertMongoSql } from '../actions/actions';
import CodeMirrorPanel from '../components/CodeMirrorPanel';

const mapStateToProps = state => ({
  codeRight: state.conversion.result
});

const mapDispatchToProps = dispatch => ({
  onWriteDown: (text) => {
    dispatch(convertMongoSql(text));
  }
});

const CodePanel = connect(mapStateToProps, mapDispatchToProps)(CodeMirrorPanel);

export default CodePanel;
