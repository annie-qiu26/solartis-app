import React from 'react';
import { Header } from 'react-native-elements';

export default class SolartisHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                outerContainerStyles={{ backgroundColor: '#3D6DCC', paddingTop: 20 }}
                centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
            />
        );
    }


}