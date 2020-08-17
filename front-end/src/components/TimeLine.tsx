import * as React from 'react';

interface TimeLineProps {

}

interface TimeLineState {
    selectedRecipient: '';
}

class TimeLine extends React.Component<TimeLineProps, TimeLineState> {

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

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({}, dispatch);

export default TimeLine;
