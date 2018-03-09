import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View, Text, Alert, Image, Dimensions, StyleSheet,
    ImageBackground, Platform, Slider, TextInput
} from 'react-native'
import ValueScale from '../../src/utils/scaleDimesion.js';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
class ColorControl extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: 'yellow', flexDirection: 'row', alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>{this.props.title}</Text>
                <Slider
                    onValueChange={
                        (val) => {
                            // this.setState({value:val})
                            this.props.onValueChanged(val);
                        }
                    }

                    value={this.state.value} step={1} maximumValue={255} style={{ width: 200 }}></Slider>
                <View>
                    <TextInput value={`${this.props.value}`} style={mystyle.textInput}>
                    </TextInput>
                </View>
            </View>
        )
    }
}
export default class HotelScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 100,
            green: 150,
            blue: 200
        }
    }
    onsliderUpdate = (color) => {
        // Alert.alert('huy');
        this.setState(color);
    }

    render() {
        return (
            <View style={mystyle.container}>
                <View style={mystyle.header}>
                    <Text style={mystyle.text}>
                        Color Picker
                    </Text>
                </View>
                <View style={mystyle.body}>
                    <View style={mystyle.board}>
                        <ColorControl title='R' value={this.state.red} onValueChanged={
                            (val) => {
                                const currentColor = this.state;
                                const newColor = { ...currentColor, red: val };
                                this.onsliderUpdate(newColor)
                            }}></ColorControl>
                        <ColorControl title='G' value={this.state.green}
                            onValueChanged={
                                (val) => {
                                    const currentColor = this.state;
                                    const newColor = { ...currentColor, green: val };
                                    this.onsliderUpdate(newColor)
                                }}></ColorControl>
                        <ColorControl title='B' value={this.state.blue}
                            onValueChanged={
                                (val) => {
                                    const currentColor = this.state;
                                    const newColor = { ...currentColor, blue: val };
                                    this.onsliderUpdate(newColor)
                                }}></ColorControl>
                        <View style={{ flex: 1, backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>
                        </View>
                    </View>
                </View>

            </View>

        )
    }
}
const mystyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    header: {
        height: 65 * ValueScale(), backgroundColor: '#ECEFF1',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        elevation: 5,
    },
    body: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    board: {
        width: 300 / ValueScale(),
        height: 350 / ValueScale(),
        backgroundColor: 'white',
    },
    text: {
        ...Platform.select({
            android: {
                fontSize: 20
            },
            ios: {

            }
        })

    },
    textInput: {
        width: 50, height: 30, borderColor: 'gray',
        borderWidth: 1, borderRadius: 5, paddingBottom: 5, textAlign: 'center',

    }


});

