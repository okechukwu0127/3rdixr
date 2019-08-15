import React, {Component} from 'react';
/*
import Icon from 'react-native-vector-icons/MaterialIcons';
*/
import ReactNativeParallaxHeader from 'react-native-parallax-header';
/*import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';*/
import ParallaxHeader from './ParallaxHeader'
import CryptoCard from './CryptoCard'
//import styles from './StyleSheet'

import { Container, Header, Tab, Badge,Tabs, Card,Button, Content,ListItem,Right, Left, TabHeading,CardItem, Body, Icon, } from 'native-base';


/*import { Transition } from 'react-navigation-fluid-transitions';*/





import {Animated,Platform,StyleSheet,  Text,
    View, SafeAreaView,Dimensions,
    Image, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator,FlatList} from "react-native";

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

export default class AppParallax extends Component {

    constructor() {
        super();

        this.state ={
            currentTab:0,
            loading:false,
            error:false,
            counter:0,
            data:[]
        }

    }

    formatJSON(data){
        var result = []
        if(!Array.isArray(data)){//if is not an array
            result.push(data) // push it as the first item of an array
        }else{
            result=data
        }

        return result
    }

    ImageIcon(item){

        let itemm = this.formatJSON(item)

        //alert(JSON.stringify(itemm))

        if(itemm.sybmbol=='BTC')
        {
            //return  require('./../assets/img/Bitcoin.png');
        }
        else  if(itemm.sybmbol=='LTC')
        {
            //return  require('./../assets/img/Litecoin.png');

        }

        else  if(itemm.sybmbol=='NMC')
        {
           // return require('./../assets/img/Namecoin.png');

        }
        else  if(itemm.sybmbol=='PPC')
        {
            //return  require('./../assets/img/Peercoin.png');

        }
        else
        {
            //return  require('./../assets/img/Bitcoin.png');
        }

    }


    componentDidMount()
    {

        let baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map';
        let limit = 10;
        let key = '69dec42a-f58f-4854-8af5-b1c515d3d145'

        //console.log(query)
        //alert(this.state.pagination)
        this.setState({'loading':true})
        return fetch(baseUrl+'?limit='+limit,
            {
                method:'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CMC_PRO_API_KEY':key,
                }),
                // body: JSON.stringify('')
            }).then(response =>
        {

            return response.json()

        })
            . then(jsonResponse=>
            {
                var count = Object.keys(jsonResponse.data).length;
                //alert(count)
               // alert(JSON.stringify(jsonResponse.data))
                if(jsonResponse.status.error_code < 1)
                {

                    this.setState({
                        loading:false,
                        error:false,
                        data:jsonResponse.data,
                        counter: count
                    })

                }
                else {

                    this.setState({
                        loading:true,
                        error:true,
                        counter: 0
                    })


                }


            })
            .catch(err=>{

                alert('ERROR \n' +err.message);

                this.componentDidMount();

                this.setState({
                    loading:false,
                    error:'yes',
                    counter:0
                })

            }).done();


    }

    RandomNumber() {
        const min = 1;
        const max = 30;
        const rand = min + Math.random() * (max - min);
        return rand.toFixed(0)
        //this.setState({ random: rand });
    }

    renderContent =() => (
        <SafeAreaView style={styles.navContainer2}>





            <View style={{width:100+'%', marginTop:20, height: (SCREEN_HEIGHT),paddingHorizontal:15,}}>





                                <Tabs

                                    initialPage={this.state.currentTab}
                                    onChangeTab={({ i }) => this.setState({ currentTab: i })}
                                    tabBarUnderlineStyle={{ backgroundColor: '#0e5791',  }}>


                                    <Tab style={{backgroundColor:'black',paddingTop:10}} heading={
                                        <TabHeading
                                            style={this.state.currentTab == 0 ? styles.activeTabStyle : styles.inactiveTabStyle} >
                                            <Text
                                                style={this.state.currentTab == 0 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                            >BTC</Text></TabHeading>}>

                                        {
                                            (this.state.loading)
                                                ?
                                                (<View style={styles.loading}>
                                                    <ActivityIndicator size="large"/>
                                                </View>)
                                                :
                                                null
                                        }


                                        <ScrollView
                                            horizontal={false}
                                            style={{height:800,flex:1}}
                                            scrollEnabled={true}
                                            contentContainerStyle={{ flexGrow: 1 }}
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                        >
                                            <View style={{flex:1}}>


                                                <FlatList
                                                    contentContainerStyle={{
                                                        borderWidth: 0,

                                                        borderColor:'#cc3e3b',
                                                        justifyContent:'center',
                                                        alignItem:'center',
                                                        width:  ((Dimensions.get('screen').width))


                                                    }}

                                                    data={this.state.data}
                                                    //onRefresh={this.reloadCourses()}
                                                    //refreshing={this.state.refreshing}
                                                    keyExtractor={(item) =>(this.RandomNumber()+(this.RandomNumber()+9))}
                                                    renderItem={({item,index})=>
                                                    {

                                                        let rd = this.RandomNumber();

                                                        //let arrayVal = this.formatJSON(...item)

                                                        return (<CryptoCard
                                                                {...item}
                                                                List_index={index}
                                                                RandImg={rd}
                                                                //ImageTwick={this.ImageIcon.bind(this, {...item})}

                                                            />
                                                        )}


                                                    }



                                                />



                                            </View>

                                        </ScrollView>

                                    </Tab>

                                    <Tab  style={{backgroundColor:'black'}} heading={
                                        <TabHeading style={this.state.currentTab == 1 ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                            <Text
                                                style={this.state.currentTab == 1 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                            >DEALS</Text></TabHeading>}>




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
                                                }}>Bank</Text>
                                                <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                                    <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                                    }}>
                                                        <Image style={{height:15,width:15,}}
                                                               source={require('./assets/location_pin.png')}/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.iconRight} onPress={() => {
                                                    }}>
                                                        <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Get best promo</Text>
                                                    </TouchableOpacity>
                                                </SafeAreaView>


                                                <View style={[styles.navBar_space_between]}>

                                                    <View style={styles.iconLeft}>

                                                        <Text style={{fontSize:12,color:'#ccc',paddingLeft:0}}>12/09/2019</Text>
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
                                                }}>Credit Card</Text>
                                                <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                                    <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                                    }}>
                                                        <Image style={{height:15,width:15,}}
                                                               source={require('./assets/location_pin.png')}/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.iconRight} onPress={() => {
                                                    }}>
                                                        <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Get best promo</Text>
                                                    </TouchableOpacity>
                                                </SafeAreaView>


                                                <View style={[styles.navBar_space_between]}>

                                                    <View style={styles.iconLeft}>

                                                        <Text style={{fontSize:12,color:'#ccc',paddingLeft:0}}>19/09/2018</Text>
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
                                                }}>Money</Text>
                                                <SafeAreaView style={[styles.navBarStart,{width:200,marginTop:5}]}>
                                                    <TouchableOpacity style={styles.iconLeft} onPress={() => {
                                                    }}>
                                                        <Image style={{height:15,width:15,}}
                                                               source={require('./assets/location_pin.png')}/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.iconRight} onPress={() => {
                                                    }}>
                                                        <Text style={{fontSize:12,color:'white',paddingLeft:5}}>Get best deals</Text>
                                                    </TouchableOpacity>
                                                </SafeAreaView>


                                                <View style={[styles.navBar_space_between]}>

                                                    <View style={styles.iconLeft}>

                                                        <Text style={{fontSize:12,color:'#ccc',paddingLeft:0}}>06/03/2016</Text>
                                                    </View>
                                                    <View style={[styles.iconLeft,{width:20+'%'}]}>
                                                        <Image style={{height:20,width:20,}}
                                                               source={require('./assets/emotion_love.png')}/>
                                                    </View>

                                                </View>



                                            </ImageBackground>






                                        </View>

                                    </Tab>

                                    <Tab  style={{backgroundColor:'black'}} heading={
                                        <TabHeading style={this.state.currentTab == 2 ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                            <Text
                                                style={this.state.currentTab == 2 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                            >NMC</Text></TabHeading>}>
                                        <Content>


                                            {
                                                (this.formatJSON(this.state.data) || []).map((item,index) => (

                                                    <Card style={{borderRadius:20}}>
                                                        <CardItem>
                                                            <Body>

                                                        <ListItem icon style={{borderColor:'#ccc',borderWidth:0, width:96+'%'}}>
                                                            <Left>
                                                                <Button style={{ backgroundColor: "#FF9501" }}>
                                                                    {(item.symbol=='BTC')?(<Image style={{height:29,width:29,}}
                                                                                                   source={require('./../assets/img/Bitcoin.png')}/>):
                                                                        ((item.symbol=='LTC')?<Image style={{height:29,width:29,}}
                                                                                                      source={require('./../assets/img/Litecoin.png')}/>:
                                                                            ((item.symbol=='NMC')?<Image style={{height:29,width:29,}}
                                                                                                          source={require('./../assets/img/Namecoin.png')}/>:
                                                                                ((item.symbol=='TRC')?<Image style={{height:29,width:29,}}
                                                                                                              source={require('./../assets/img/Terracoin.png')}/>:
                                                                                    ((item.symbol=='PPC')?(<Image style={{height:29,width:29,}}
                                                                                                                   source={require('./../assets/img/Peercoin.png')}/>):null))))}
                                                                </Button>
                                                            </Left>
                                                            <Body>
                                                             <Text style={{color:'#6b6b6b',fontSize:16}}>{item.name}</Text>
                                                             <Text style={{ color:'#ccc',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
                                                            </Body>
                                                            <Right>
                                                                <Text>On</Text>

                                                            </Right>
                                                        </ListItem>

                                                            </Body>
                                                        </CardItem>
                                                    </Card>
                                                ))

                                            }

                                        </Content>



                                    </Tab>

                                    <Tab  style={{backgroundColor:'black'}} heading={
                                        <TabHeading style={this.state.currentTab == 3 ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                            <Text
                                                style={this.state.currentTab == 3 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                            >PPC</Text></TabHeading>}>

                                        <Card style={{borderRadius:20}}>
                                            <CardItem header>
                                                <Text>Crypto-Curency</Text>
                                            </CardItem>
                                            <CardItem>
                                                <Body>
                                                <Text>
                                                    Crypto Example template view

                                                </Text>
                                                </Body>
                                            </CardItem>
                                        </Card>

                                    </Tab>

                                    <Tab  style={{backgroundColor:'black'}} heading={
                                        <TabHeading style={this.state.currentTab == 4 ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                            <Text
                                                style={this.state.currentTab == 4 ? styles.activeTextStyle : styles.inactiveTextStyle}
                                            >NVC</Text></TabHeading>}>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                <Text>
                                                    Crypto Example template view

                                                </Text>
                                                </Body>
                                            </CardItem>
                                        </Card>

                                    </Tab>

                                </Tabs>






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
