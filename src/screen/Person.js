import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View, Text, Alert, Image, Dimensions, StyleSheet,
    ImageBackground, Platform, Slider, TextInput, StatusBar, FlatList, TouchableHighlight, TouchableOpacity
} from 'react-native'
import ValueScale from '../utils/scaleDimesion.js';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
export default class Person extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            detailList: [
                
            ],
        }
    }

    render() {
        return (
            <View style={mystyle.container}>
                <Text>
                    {this.state.detailList.login}
                </Text>
                {/* <Image source={uri:}>
                    
                </Image> */}

            </View>

        );
    }
    componentDidMount(name) {
        let url_link = this.props.navigation.state.params.url;
        this.setState({
            isrefresh: true
        })
        fetch(`https://api.github.com/users/${this.props.navigation.state.params.name}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    detailList: responseJson,
                    isrefresh: false,
                    numitem: responseJson.total_record
                })
                // Alert.alert(`${this.props.navigation.state.params.url}`);
            })
            .catch((e) => {
                Alert.alert("" + e);
            })
    }
}
const mystyle = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: windowsWidth,
        height: 100 * ValueScale(),
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    textTitle: {
        fontFamily: '../font/OpenSans-Semibold.ttf',
        fontSize: 32 * ValueScale(),
        color: '#FFFFFF',
        // backgroundColor: 'red'
    },
    textT: {
        color: '#FFFFFF',
        // backgroundColor: 'red'
    },
    textBody: {
        fontFamily: '../font/OpenSans-Semibold.ttf',
        fontSize: 50 * ValueScale(),
        color: 'black',
        margin: 10 * ValueScale(),
        marginLeft: 30 * ValueScale()
    },
    viewItems: {
        borderRadius: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        position: 'absolute',
        left: 30,
    }

});
