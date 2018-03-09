import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
import ValueScale from '../../src/utils/scaleDimesion.js';
export default class SideContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: [
                { key: 0, value: "KHÁCH SẠN", path: require('../assets/ic_khachsan.png'), width: 41 * ValueScale(), height: 41 },
                { key: 1, value: "LÀNG NGHỀ", path: require('../assets/ic_langnghe.png'), width: 35 * ValueScale(), height: 41 },
                { key: 2, value: "ĐỊA ĐIỂM", path: require('../assets/ic_diadiem.png'), width: 41 * ValueScale(), height: 41 },
                { key: 3, value: "NHÀ HÀNG", path: require('../assets/ic_nhahang.png'), width: 41 * ValueScale(), height: 41 },
                { key: 4, value: "ẨM THỰC", path: require('../assets/ic_amthuc.png'), width: 41 * ValueScale(), height: 41 },
            ],
            id: 0,
            backgroundColor: 'rgba(255,255,255,0.3)'
        }
    }
    render() {
        return (
            <View style={mystyle.container}>
                <ImageBackground source={require('../assets/bg.png')}
                    style={mystyle.container} >
                    <Image style={mystyle.imgstyle}
                        source={require('../assets/logo.png')}></Image>
                    <FlatList
                        style={{ top: 300 * ValueScale() }}
                        data={this.state.menuItem}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={{ backgroundColor: item.key == this.state.id ? 'rgba(255,255,255,0.3)' : 'transparent' }}
                                onPress={() => {
                                    this.setState({ id: item.key });
                                    if (item.key == 0) {
                                        this.props.navigation.navigate('Hotel', { cate: 'Khách sạn', url: "nha-hang" });
                                    }
                                    if (item.key == 1) {
                                        this.props.navigation.navigate('Hotel', { cate: "Làng nghề", url: "nha-hang" });
                                    }
                                    if (item.key == 2) {
                                        this.props.navigation.navigate('Hotel', { cate: "Địa điểm", url: "dia-diem" });
                                    
                                    }
                                    if (item.key == 3) {
                                        this.props.navigation.navigate('Hotel', { 'cate': "Nhà hàng", url: "nha-hang" });
                                    }
                                    if (item.key == 4) {
                                        this.props.navigation.navigate('Hotel', { cate: "Ẩm thực", url: "am-thuc" });
                                    }


                                }}>
                                <View style={mystyle.itemFlat}>
                                    <Image resizeMode="contain" style={[mystyle.imgstyleItem, { width: item.width }]}
                                        source={item.path}></Image>
                                    <Text style={[mystyle.textItem]}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => index}
                    />

                </ImageBackground>
            </View>
        );
    }
}
const mystyle = StyleSheet.create({
    container: {
        width: 620 * windowsWidth / 720,
        flex: 1
    },
    imgstyle: {
        width: (405 * ValueScale()),
        height: (113 * ValueScale()),
        left: 46 * ValueScale(),
        top: 96 * ValueScale()
    },
    imgstyleItem: {

    },
    itemFlat: {
        height: 100 * ValueScale(),
        flex: 1,
        flexDirection: 'row',
        // marginBottom: 17 * ValueScale(),
        marginLeft: 52 * ValueScale(),
        borderBottomWidth: 0,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    textItem: {
        position: 'absolute',
        left: 142 * ValueScale(),
        fontFamily: '../font/OpenSans-Semibold.ttf',
        fontSize: 27 * ValueScale(),
        color: '#FFFFFF'
    },
});