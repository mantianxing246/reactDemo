import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';


class Slider extends React.Component {
    render() {
        return (
            <ReactSwipe swipeOptions={{
                continuous: this.props.auto,
                auto:this.props.speed
            }}>
                {this.props.children}
            </ReactSwipe>
        );
    }
}

export default Slider;