import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View, Alert, Text, Image, Dimensions, StyleSheet,
    TouchableOpacity, ImageBackground, ScrollView
} from 'react-native';
// import Slider from '../../src/components/slider.js';
import ValueScale from '../../utils/scaleDimesion.js';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default class BodyMain extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    BodyCreate = () => {

        return (
            <View >
                <ScrollView style={mystyle.scroll}>
                    <ViewClick
                        p_style={mystyle.container1}
                        mysize={{ width: 702 * windowsWidth / 720, height: 350 * (windowsWidth / 720) }}
                        onViewClick={this.props.onViewHotelClick}
                        imagePath={require('../../assets/bg_khachsan.png')}
                        imgPath={require('../../assets/ic_khachsan.png')}
                        sizeImg={{ width: 41 * ValueScale(), height: 41 * ValueScale(),left:32* ValueScale() }}
                        textItem='KHÁCH SẠN'
                        poTxt={{left:84* ValueScale()}}

                    />
                    <View style={mystyle.container2}>
                        <ViewClick
                            mysize={{ width: 350 * (windowsWidth / 720), height: 350 * (windowsWidth / 720) }}
                            onViewClick={this.props.onViewVillageClick}
                            imagePath={require('../../assets/bg_langnghe.png')}
                            imgPath={require('../../assets/ic_langnghe.png')}
                            sizeImg={{ width: 35 * ValueScale(), height: 41 * ValueScale(),left:32,left:32*ValueScale() }}
                            textItem="LÀNG NGHỀ"
                            poTxt={{left:84* ValueScale()}}
                        />
                        <ViewClick

                            mysize={{ width: 350 * (windowsWidth / 720), height: 350 * (windowsWidth / 720) }}
                            onViewClick={this.props.onViewPlaceClick}
                            imagePath={require('../../assets/bg_diadiem.png')}
                            imgPath={require('../../assets/ic_diadiem.png')}
                            sizeImg={{ width: 41 * ValueScale(), height: 41 * ValueScale(),left:32,left:32*ValueScale() }}
                            textItem="ĐỊA ĐIỂM"
                            poTxt={{left:84* ValueScale()}}
                        />
                    </View>
                    <View style={mystyle.container2}>
                        <ViewClick

                            mysize={{ width: 350 * (windowsWidth / 720), height: 350 * (windowsWidth / 720) }}
                            onViewClick={this.props.onViewFoodClick}
                            imagePath={require('../../assets/bg_amthuc.png')}
                            imgPath={require('../../assets/ic_amthuc.png')}
                            sizeImg={{ width: 41 * ValueScale(), height: 41 * ValueScale(),left:32,left:32*ValueScale() }}
                            textItem="ẨM THỰC"
                            poTxt={{left:84* ValueScale()}}
                        />
                        <ViewClick

                            mysize={{ width: 350 * (windowsWidth / 720), height: 350 * (windowsWidth / 720) }}
                            onViewClick={this.props.onViewRestaurantClick}
                            imagePath={require('../../assets/bg_nhahang.png')}
                            imgPath={require('../../assets/ic_nhahang.png')}
                            sizeImg={{ width: 41 * ValueScale(), height: 41 * ValueScale(),left:32*ValueScale() }}
                            textItem='NHÀ HÀNG'
                            poTxt={{left:84* ValueScale()}}
                        />
                    </View>
                    <View style={mystyle.bottom}>
                        <Text style={mystyle.textbottom}>
                            ©2017 huego.vn All Rights Reserved
                        </Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
    render() {
        return (
            <View style={mystyle.root}>
                {this.BodyCreate()}
            </View>
        );
    }
}
const mystyle = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    scroll: {
        flex: 1,
    },
    container1: {
        width: windowsWidth,
        height: 350 * (windowsWidth / 720),
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20 * ValueScale(),
    },
    container2: {
        flexDirection: 'row',
        width: windowsWidth,
        height: 350 * (windowsWidth / 720),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5 * ValueScale(),
    },
    bottom: {
        flexDirection: 'row',
        width: 720 * (windowsWidth / 720), height: 92 * ValueScale(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textImage: {
        position: 'absolute',
        fontFamily: '../../font/OpenSans-Light.ttf',
        fontSize: 36 * ValueScale(),
        color: "#FFFFFF",
        top:275* (windowsWidth / 720),
    },
    textbottom: {
        position: 'absolute',
        fontFamily: '../../font/Roboto-Regular.ttf',
        fontSize: 28 * ValueScale(),
    },
    imagestyleinside: {
        position: 'absolute',
        top:275* (windowsWidth / 720)
    }

});
BodyMain.prototypes = {
    onViewHotelClick: PropTypes.func,
    onViewVillageClick: PropTypes.func,
    onViewFoodClick: PropTypes.func,
    onViewPlaceClick: PropTypes.func,
    onViewRestaurantClick: PropTypes.func,
}
BodyMain.defaultProps = {
    onViewHotelClick: () => { },
    onViewVillageClick: () => { },
    onViewFoodClick: () => { },
    onViewPlaceClick: () => { },
    onViewRestaurantClick: () => { },
    pathImage: '../../assets/bg_khachsan.png'
}
class ViewClick extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity onPress={this.props.onViewClick}>
                <View style={this.props.p_style}>
                    <ImageBackground
                        // style={[{ width: 702 * (windowsWidth / 720) }]}
                        style={this.props.mysize}
                        source={this.props.imagePath}
                    >
                        <Image style={[this.props.sizeImg,mystyle.imagestyleinside]} source={this.props.imgPath}>

                        </Image>
                        <Text style={[this.props.poTxt,mystyle.textImage]}>
                            {this.props.textItem}
                        </Text>
                    </ImageBackground>
                </View >
            </TouchableOpacity>
        );
    }
}
