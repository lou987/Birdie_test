import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRecipients } from '@App/store/actions';

interface ITableProps {
    getRecipients: Function;
    recipients: {
        data: Array<string>,
        isFetching: boolean,
        error: boolean
    }
}

interface ITableState {
    selectedRecipient: ''

}

class Table extends React.Component<ITableProps, ITableState>  {

    componentDidMount() {
        this.props.getRecipients();
    }


    _renderSelectRecipient = () => {
        return (
            <div>
                <label>select a recipient please</label>
                <select name="recipient" >
                    {
                        this.props.recipients.data.map(id => {
                            <option key="{id}" value="{id}">{id}</option>
                        })
                    }
                </select>
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
    }
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({
    getRecipients,

}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Table);
