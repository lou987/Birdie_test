import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface ITimeLineProps {

}

interface ITimeLineState {
    selectedRecipient: ''

}

class TimeLine extends React.Component<ITimeLineProps, ITimeLineState> {



    componentDidMount() {

    }



    public render() {
        return (
            <>
                <h1>Timeline</h1>
            </>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: object) => {

};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({


}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
