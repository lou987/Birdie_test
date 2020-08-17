import { RootState } from '@App/store/reducers';
import * as React from 'react';
import { connect } from 'react-redux';

interface TableProps {
}

interface TableState {
    selectedRecipient: '';
}

class Table extends React.Component<TableProps, TableState>  {

    componentDidMount() {
    }

    _renderSelectRecipient = () => {
        return (
            <div>
                <label>select a recipient please</label>

            </div>
        );
    }

    public render() {
        return (
            <>
                <h1>Table</h1>
                {this._renderSelectRecipient()}
            </>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: object) => {
    return {
        recipients: state.recipients,
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({ getRecipients }, dispatch);

export default connect(mapStateToProps)(Table);
