import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert, Image, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// import Slider from '../../src/components/slider.js';
import ValueScale from '../../utils/scaleDimesion.js';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default class Header extends Component {
    state = {}
    constructor(props) {
        super(props);
    }
    HeaderCreate = () => {
        return (
            <ImageBackground
                style={{ width: 720 / ValueScale(), height: 106 * ValueScale() }}
                source={require('../../assets/bg_header.png')
                }>
                <TouchableOpacity style={{
                    position: 'absolute', left: 644 * windowsWidth / 720,
                    top: 35 * ValueScale()
                }} onPress={this.props.onSearchMenuClick} >
                    <Image
                        style={[{ width: 36 * ValueScale(), height: 36 * ValueScale() }, mystyle.icon_search]}
                        source={require('../../assets/ic_find.png')}
                    ></Image>
                </TouchableOpacity>
                <Image
                    style={[{ width: 172 * ValueScale(), height: 48 * ValueScale() }, mystyle.icon_logo]}
                    source={require('../../assets/small_logo.png')}
                ></Image>
            </ImageBackground>
        )
    }
    render() {
        return (
            <View style={mystyle.container}>
                {this.HeaderCreate()}
            </View>
        );
    }
}
const mystyle = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'red'
    },
    container: {
        // flex: 1,
        flexDirection: 'row',
        width: 720 / ValueScale(), height: 106 * ValueScale()
    },
    icon_search: {
        // left:200*ValueScale(),
    },
    icon_logo: {
        position: 'absolute',
        left: windowsWidth / 2 - 172 / 2 * ValueScale(),
        top: windowsHeight / 2 - 48 / 2 * ValueScale(),
        top: 35 * ValueScale()
        // left:200*ValueScale(),
    }

});
Header.prototypes = {
    onSearchMenuClick: PropTypes.func,
}
Header.defaultProps = {
    onViewHotelClick: () => { },
}