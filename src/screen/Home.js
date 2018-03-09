import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View, Text, Alert, Image, Dimensions, StyleSheet,
    ImageBackground, Platform, Slider, TextInput, StatusBar, FlatList, TouchableHighlight, TouchableOpacity
} from 'react-native'
import ValueScale from '../utils/scaleDimesion.js';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
export default class Home extends PureComponent {
    constructor(props) {
        super(props);
    
    }
    onPress(ten){
        this.props.navigation.navigate('Person',{name:ten,url:"nha-hang"});
    }
    render() {
        return (
            <View style={mystyle.container}>
                <View style={mystyle.header}>
                    <Text style={[{ marginTop: 38 * ValueScale() }, mystyle.textTitle]}>
                        Home</Text>
                </View>
                <Text style={[mystyle.textBody, { fontSize: 40 * ValueScale() }]}>
                    Top 5 GitHub Users</Text>
                <Text style={[mystyle.textBody, { fontSize: 20 * ValueScale() }]}>
                    Tap the username to see more information</Text>
                <View style={mystyle.container}>
                    <TouchableOpacity onPress={()=>this.onPress("GrahamCampbell")}
                        style={[mystyle.viewItems, { width: 200, height: 50 }]}>
                        <View >
                            <Text style={mystyle.textT}>Grahamcambel</Text>
                        </View>
                    </TouchableOpacity >



                    <View style={[mystyle.viewItems, { width: 100, height: 50, left: 240, top: 100 }]}>
                        <Text style={mystyle.textT}>josh</Text>
                    </View>
                </View>


            </View>

        );
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
Home.prototypes = {
    mywidth: PropTypes.number,
    myheight: PropTypes.number,
}