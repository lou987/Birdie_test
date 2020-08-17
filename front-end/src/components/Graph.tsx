import { RootState } from '@App/store/reducers';
import * as React from 'react';
import { connect } from 'react-redux';
interface GraphProps {

}

interface GraphState {
    selectedRecipient: '';
}
class Graph extends React.Component<GraphProps, GraphState> {

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

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps)(Graph);
