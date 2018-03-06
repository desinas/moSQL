import { connect } from 'react-redux';
import { convertMongoSql } from '../actions/actions';
import CodeMirrorPanel from '../components/CodeMirrorPanel';

const mapStateToProps = state => (state.conversion);

const mapDispatchToProps = dispatch => ({
  onWriteDown: (text) => {
    dispatch(convertMongoSql(text));
  }
});

const CodePanel = connect(mapStateToProps, mapDispatchToProps)(CodeMirrorPanel);

export default CodePanel;
