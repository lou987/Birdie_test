import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
interface IGraphProps {

}

interface IGraphState {
    selectedRecipient: ''

}
class Graph extends React.Component<IGraphProps, IGraphState> {


    componentDidMount() {

    }
    public render() {
        return (
            <>
                <h1>Graph</h1>
            </>
        );
    }
}

const mapStateToProps = (state: RootState, ownProps: object) => {

};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({


}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Graph);
