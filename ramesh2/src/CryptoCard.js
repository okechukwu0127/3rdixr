import {Badge, Card, CardItem} from "native-base";
import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
//import styles from './StyleSheet'

const styles = StyleSheet.create({
    loading: {
        /*position: 'absolute',*/
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        /*backgroundColor: "#6C044F",*/
        opacity:0.8,
        height:50,
        width:50
    },
    container: {
        flex: 1,
    },
    activeTabStyle:{
        color:'#000',
        backgroundColor:'#f3df3c',
    },
    activeTextStyle:{
        color:'#000'
    },
    inactiveTextStyle:{
        color:'#fff'
    },
    inactiveTabStyle:{
        color:'#fff',
        backgroundColor:'#000'
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    navContainer2: {
        height: DEVICE_SCREEN_HEIGHT-70,
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
        /* marginTop:10*/
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


const SCREEN_HEIGHT=812;
const DEVICE_SCREEN_WIDTH =  Math.round(Dimensions.get('window').width);
const DEVICE_SCREEN_HEIGHT   = Math.round(Dimensions.get('window').height);

const IS_IPHONE_X = (SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896);
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


const CryptoCard = props =>
{

    let name= props.name.replace(/\s+/g, '-').toUpperCase();

    if(props.sybmbol=='BTC')
    {
        let imgg=  './../assets/img/Bitcoin.png';
    }
    else  if(props.sybmbol=='LTC')
    {
        let imgg=  './../assets/img/Litecoin.png';

    }

    else  if(props.sybmbol=='NMC')
    {
        let imgg= './../assets/img/Namecoin.png';

    }
    else  if(props.sybmbol=='PPC')
    {
        let imgg=  './../assets/img/Peercoin.png';

    }
    else
    {
        let img=  './../assets/img/Bitcoin.png-'+props.sybmbol+' - ';
    }


return(
    <View style={{alignItems: 'center', borderColor:'red',borderWidth:0,
        justifyContent: 'center', width:90+'%'}}>

        <Card style={{ borderRadius:10, }} >



            <CardItem style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10 ,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10 ,
                height:80,
            }}>

                <View style={[styles.navBar_space_between,{width:100+'%',borderColor:'#ccc',borderWidth:0}]}>

                    <View style={[styles.iconLeft,{width:60+'%'}]}>

                        <View style={[styles.navBar,{borderColor:'#ccc',borderWidth:0}]}>
                            <TouchableOpacity style={styles.iconLeft} onPress={() => {
                            }}>
                                {/*<Text>{props.ImageTwick()}</Text>*/}

                                <Image style={{height:29,width:29,}}
                                       source={require('./../assets/img/Namecoin.png')}/>
                            </TouchableOpacity>
                            <View style={styles.iconRight} onPress={() => {
                            }}>
                                <Text style={{fontSize:15,color:'#000', fontWeight:'bold', paddingLeft:7}}>
                                    {name}</Text>

                                <View>
                                    <Text style={{fontSize:13, paddingTop:5, color:'#ccc'}}>$3,2039</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:13, paddingTop:2, color:'#2d2ccc'}}>{props.symbol}</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                    <View style={[styles.iconRight,{borderColor:'#ccc',borderWidth:0, }]}>


                        <View style={[styles.navBar]}>

                            <View style={styles.iconLeft}>
                                <Text style={{fontSize:13, paddingRight:10, color:'#ccc'}}>{props.first_historical_data.substring(0,10)}</Text>





                            </View>
                            <View style={styles.iconRight}>
                                <Badge info style={{height:15}}>
                                    <Text></Text>
                                </Badge>
                            </View>
                        </View>




                    </View>

                </View>


            </CardItem>
        </Card>

    </View>
)

}

export default CryptoCard;
