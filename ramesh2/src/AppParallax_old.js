import React, {Component} from 'react';

import {UIManager} from 'react-native';
import { CustomLayoutSpring } from "react-native-animation-layout";

/*
import Icon from 'react-native-vector-icons/MaterialIcons';
*/
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ParallaxHeader from './ParallaxHeader'

/*
import { Transition } from 'react-navigation-fluid-transitions';
*/

import TabBar from "@mindinventory/react-native-tab-bar-interaction";




import {Animated,Platform,StyleSheet,  Text,
    View, SafeAreaView,Dimensions,
    Image, TouchableOpacity, ImageBackground} from "react-native";

const SCREEN_HEIGHT=812;
const DEVICE_SCREEN_WIDTH =  Math.round(Dimensions.get('window').width);
const DEVICE_SCREEN_HEIGHT   = Math.round(Dimensions.get('window').height);
const IS_IPHONE_X = (SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896);
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const images = {
    background: require('../assets/img/header_bg.fw.jpg'), // Put your own image here
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    navContainer2: {
        height: DEVICE_SCREEN_HEIGHT+100,
        marginHorizontal: 0,
        backgroundColor: 'black',
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconLeft: {
        alignItems:'flex-start'
    },
    iconRight: {
        alignItems:'flex-end'
    },
    foregroundText: {
        fontSize: 34,
        fontWeight: "700",
        letterSpacing: 0.41,
        color: "black"
    },
    navBar_space_between: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginTop:10
    },
    tabClass: {
        paddingHorizontal:15,
        paddingVertical:30
    },
    tabClassTab:
        {
            paddingHorizontal:0,

        },
    tabActive:{
        backgroundColor:'#EFD51C',
        color:'#230504',
        borderRadius:20,
        padding:10

    },
    tabTextClass: {
        color:'white'
    },
    navBarStart: {
        /*height: NAV_BAR_HEIGHT,*/
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
});


export default class AppParallax extends Component {

    constructor() {
        super();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    // Simpliest way of adding the layout animation
    componentDidUpdate() {
        LayoutAnimation.configureNext(CustomLayoutSpring());
    }

    renderContent =() => (
        <SafeAreaView style={styles.navContainer2}>





            <View style={{width:100+'%', height: (SCREEN_HEIGHT-100)}}>
                <TabBar>
                    <TabBar.Item
                        icon={require('../src/assets/chart_pie_title_.png')}
                        selectedIcon={require('../src/assets/chart_pie_title.png')}
                        title="Tab1"
                        screenBackgroundColor={{ backgroundColor: '#26ba1d' }}
                    >

                       <View>
                           {/* ----  */}
                       </View>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('../src/assets/emotion_love_.png')}
                        selectedIcon={require('../src/assets/emotion_love.png')}
                        title="Tab2"
                        screenBackgroundColor={{ backgroundColor: '#000000' }}
                    >
                        <View style={{width:100+'%'}}>
                            <View style={[ styles.navBar_space_between,{width:100+'%',marginTop:5}]}>

                                <View style={[styles.tabClass]}><Text style={[styles.tabTextClass]}>All</Text></View>
                                <View style={[styles.tabClass]}><Text style={[styles.tabTextClass, styles.tabActive]}>Hot New</Text></View>
                                <View style={[styles.tabClass]}><Text style={[styles.tabTextClass]}>Top Rated</Text></View>
                                <View style={[styles.tabClass]}><Text style={[styles.tabTextClass]}>Collection</Text></View>

                            </View>


                            <View style={{width:100+'%',paddingHorizontal:10}}>

                                <ImageBackground source={ require('../assets/img/row.fw.jpg')}
                                                 style={{ width:100+'%',
                                                     paddingVertical:10, paddingHorizontal:15,
                                                     height:120, marginVertical:20,
                                                     marginLeft:10,
                                                     borderRadius:20,marginHorizontal:0,paddingTop:20}} >

                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 22,
                                    }}>Experience Name</Text>
                                    <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                        <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                        }}>
                                            <Image style={{height:15,width:15,}}
                                                   source={require('./assets/location_pin.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconRight} onPress={() => {
                                        }}>
                                            <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Experience location</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>


                                    <View style={[styles.navBar_space_between]}>

                                        <View style={styles.iconLeft}>

                                            <Text style={{fontSize:12,color:'white',paddingLeft:0}}>128 assets</Text>
                                        </View>
                                        <View style={[styles.iconLeft,{width:20+'%'}]}>
                                            <Image style={{height:20,width:20,}}
                                                   source={require('./assets/emotion_love.png')}/>
                                        </View>

                                    </View>



                                </ImageBackground>


                                <ImageBackground source={ require('../assets/img/row2.fw.jpg')}
                                                 style={{ width:100+'%',
                                                     paddingVertical:10, paddingHorizontal:15,
                                                     height:120, marginVertical:20,
                                                     marginLeft:10,
                                                     borderRadius:20,marginHorizontal:0,paddingTop:20}} >

                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 22,
                                    }}>Experience Name</Text>
                                    <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                        <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                        }}>
                                            <Image style={{height:15,width:15,}}
                                                   source={require('./assets/location_pin.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconRight} onPress={() => {
                                        }}>
                                            <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Experience location</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>


                                    <View style={[styles.navBar_space_between]}>

                                        <View style={styles.iconLeft}>

                                            <Text style={{fontSize:12,color:'white',paddingLeft:0}}>128 assets</Text>
                                        </View>
                                        <View style={[styles.iconLeft,{width:20+'%'}]}>
                                            <Image style={{height:20,width:20,}}
                                                   source={require('./assets/emotion_love.png')}/>
                                        </View>

                                    </View>



                                </ImageBackground>


                                <ImageBackground source={ require('../assets/img/row.fw.jpg')}
                                                 style={{ width:100+'%',
                                                     paddingVertical:10, paddingHorizontal:15,
                                                     height:120, marginVertical:20,
                                                     marginLeft:10,
                                                     borderRadius:20,marginHorizontal:0,paddingTop:20}} >

                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 22,
                                    }}>Experience Name</Text>
                                    <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                        <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                        }}>
                                            <Image style={{height:15,width:15,}}
                                                   source={require('./assets/location_pin.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconRight} onPress={() => {
                                        }}>
                                            <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Experience location</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>


                                    <View style={[styles.navBar_space_between]}>

                                        <View style={styles.iconLeft}>

                                            <Text style={{fontSize:12,color:'white',paddingLeft:0}}>128 assets</Text>
                                        </View>
                                        <View style={[styles.iconLeft,{width:20+'%'}]}>
                                            <Image style={{height:20,width:20,}}
                                                   source={require('./assets/emotion_love.png')}/>
                                        </View>

                                    </View>



                                </ImageBackground>






                            </View>
                        </View>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('../src/assets/flag_flyaway_pink_.png')}
                        selectedIcon={require('../src/assets/flag_flyaway_pink.png')}
                        title="Tab3"
                        screenBackgroundColor={{ backgroundColor: '#485d72' }}
                    >
                        <View>
                            {/*Page Content*/}
                        </View>
                    </TabBar.Item>
                </TabBar>
            </View>









    </SafeAreaView>);



    renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar}/>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.iconLeft} onPress={() => {
                }}>

                    <Image style={{height:25,width:25,}}
                           source={require('./assets/back_white.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRight} onPress={() => {
                }}>
                    <Image style={{height:25,width:25,}}
                           source={require('./assets/menu_white.png')}/>

                </TouchableOpacity>
            </View>
        </View>
    )




    render() {

        return (
            <View style={styles.container}>
                <ReactNativeParallaxHeader
                    headerMinHeight={HEADER_HEIGHT}
                    headerMaxHeight={250}
                    extraScrollHeight={20}
                    alwaysShowNavBar={false}
                    alwaysShowTitle={false}
                    navbarColor="#000"
                    title={<ParallaxHeader/>}
                    titleStyle={styles.titleStyle}
                    backgroundImage={images.background}
                    backgroundImageScale={1.2}
                    renderNavBar={this.renderNavBar}
                    renderContent={this.renderContent}
                    containerStyle={styles.container}
                    contentContainerStyle={styles.contentContainer}
                    innerContainerStyle={styles.container}
                    scrollViewProps={{
                        onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                        onScrollEndDrag: () => console.log('onScrollEndDrag'),
                    }}
                />
            </View>
        );
    }


}