import React, {Component} from 'react';

/*
import Icon from 'react-native-vector-icons/MaterialIcons';
*/

import {Animated,Platform,StyleSheet,  Text,
    View,
    Image, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:100+'%',
        borderWidth:1,
        borderColor:'#ccc',
        marginHorizontal:0,

    },
    contentContainer: {
        flexGrow: 1,
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,

    },
    titleStyle2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,

    },
    navBar_space_between: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginTop:10
    },
    navBar: {
        /*height: NAV_BAR_HEIGHT,*/
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    iconLeft: {
        alignItems:'flex-start'
    },
    iconRight: {
        alignItems:'flex-end'
    },
})

export default class ParallaxHeader extends Component {



    render() {

        return (
            <View style={[styles.navContainer,{paddingTop:40}]}>

                <View style={[styles.navBar,{width:200,}]}>
                    <TouchableOpacity style={styles.iconLeft} onPress={() => {
                    }}>
                        <Image style={{height:20,width:20,}}
                               source={require('./assets/chart_pie_title.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconRight} onPress={() => {
                    }}>
                        <Text style={{fontSize:12,color:'white',paddingLeft:10}}>Over 1000 experiences</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleStyle}>Parallax Header ~</Text>


                <View style={[styles.navBar_space_between]}>

                    <View style={styles.iconLeft}>

                        <View style={[styles.navBar,{width:200,}]}>
                            <TouchableOpacity style={styles.iconLeft} onPress={() => {
                            }}>
                                <Image style={{height:15,width:15,}}
                                       source={require('./assets/location_pin.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconRight} onPress={() => {
                            }}>
                                <Text style={{fontSize:15,color:'white',paddingLeft:0}}>Destination Location</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.iconRight}>


                        <View style={[styles.navBar]}>

                            <View style={styles.iconLeft}>
                                <Image style={{height:25,width:25,}}
                                                                 source={require('./assets/emotion_love.png')}/>
                            </View>
                            <View style={styles.iconRight}>
                                <Text style={{color:'white'}}>325</Text>
                            </View>
                        </View>




                    </View>

                </View>




            </View>

        )

    }

}
