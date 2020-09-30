import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}>
        {/* search */}
        <View style={{ flexDirection: "row" , marginHorizontal: 17  }}>
          <View style={{ position: "relative", width: "90%" }}>
            <TextInput placeholder="What do you to eat" style={{ fontSize: 14, borderWidth: 1, borderColor: '#545454', borderRadius: 25, height: 40, paddingRight: 20, paddingLeft: 60 }}></TextInput>
            <Image source={require('./assets/icon/search.png')} style={{ position: "absolute", top: 7, left: 15 }}></Image>
          </View>
          <View style={{ alignContent: "center", justifyContent: "center", width: 35, marginLeft: 10 }}>
            <Image source={require('./assets/icon/promo.png')}></Image>
          </View>
        </View>
        {/* gopay */}
        <View style={{ marginVertical: 20, marginHorizontal: 17  }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#2c5fb8", borderTopRightRadius: 5, borderTopLeftRadius: 5, padding: 10, }}>
            <Image source={require('./assets/icon/gopay.png')}></Image>
            <Text style={{ color: '#ffffff', fontSize: 17, fontWeight: "bold" }}>Rp.50.000</Text>
          </View>
          <View style={{ flexDirection: "row", backgroundColor: '#2f65bd', padding: 15 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./assets/icon/pay.png')}></Image>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>Pay</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./assets/icon/nearby.png')}></Image>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>Nearby</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./assets/icon/topup.png')}></Image>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>TopUp</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image source={require('./assets/icon/more.png')}></Image>
              <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 10, color: "#ffffff" }}>More</Text>
            </View>
          </View>
        </View>
        {/* main */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
          <View style={{justifyContent: "space-between", flexDirection:"row", width: "100%"}}>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-ride.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Menu</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-car.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Car</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-bluebird.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-BlueBird</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-send.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Send</Text>
            </View>
          </View>
          <View style={{justifyContent: "space-between", flexDirection:"row", width: "100%", marginTop: 10}}>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-deals.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Deals</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-pulsa.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Pulsa</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-food.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>Go-Food</Text>
            </View>
            <View style={{width: "25%", alignItems: "center",}}>
              <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 20, justifyContent: "center", alignItems:"center" }}>
                <Image source={require('./assets/icon/go-more.png')}></Image>
              </View>
              <Text style={{fontSize: 12, fontWeight: "bold", textAlign: "center", marginTop: 5}}>More</Text>
            </View>
          </View>
        </View>
        <View style={{height: 20, width: "100%", backgroundColor: "#f2f2f4", marginTop: 20}}></View>
        {/* News Section */}
        <View style={{paddingTop: 20, marginHorizontal: 20}}>
          <View style={{position: "relative"}}>
            <Image source={require('./assets/dummy/sepak-bola.jpg')} style={{height: 200, width: "100%", borderRadius: 6}}></Image>
            <View style={{width: "100%", height: "100%", position: "absolute", backgroundColor: '#000000', top: 0, left: 0, opacity: 0.15, borderRadius: 6}}></View>
            <View style={{height: 20, width: 50, borderRadius: 6, position: "absolute", left: 10, top: 10}}>
              <Image source={require('./assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: "contain", flex: 1}} ></Image>
            </View>
          </View>
          <View style={{paddingVertical: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1}}>
            <Text style={{fontSize: 16, fontWeight: "bold", color: '#1c1c1c'}}>GO-News</Text>
            <Text style={{fontSize: 16, fontWeight: "normal", color: '#7a7a7a', marginBottom: 10}}>Lorem Ipsum dolot sit amet amet</Text>
            <TouchableOpacity style={{backgroundColor: '#61a756', alignSelf: 'flex-end', borderRadius: 6}}>
              <Text style={{fontSize: 13, color: '#ffffff', fontWeight: "bold", padding: 12, textAlign: "center"}}>
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* internal information */}
        <View style={{paddingHorizontal: 20,  borderBottomColor: '#e8e9ed', borderBottomWidth: 1, paddingVertical: 20}}>
          <View style={{height: 20, width: 50}}>
            <Image source={require('./assets/logo/gojek.png')} style={{height: undefined, width: undefined, resizeMode: "contain", flex: 1}} ></Image>
          </View>
          <Text style={{fontSize: 17, fontWeight: "bold", color: "#1c1c1c", marginTop: 15, marginBottom: 20}}>
            Complete your profile
          </Text>
          <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, marginBottom: 20}}>
            <View style={{}}>
              <Image source={require('./assets/dummy/facebook-connect.png')}/>
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: "bold", color: "#4a4a4a"}}>Connect With Facebook</Text>
              <Text style={{fontSize: 14, fontWeight: "normal", color: "#4a4a4a", width: "60%"}}>Login faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61a756', alignSelf: 'flex-end', borderRadius: 6}}>
            <Text style={{fontSize: 13, color: '#ffffff', fontWeight: "bold", padding: 12, textAlign: "center"}}>
              CONNECT
            </Text>
          </TouchableOpacity>
        </View>
        {/* Go Food Banner Section */}
        <View style={{padding: 20}}>
          <View style={{position: "relative"}}>
            <Image source={require('./assets/dummy/food-banner.jpg')} style={{height: 200, width: "100%", borderRadius: 6}}></Image>
            <View style={{width: "100%", height: "100%", position: "absolute", backgroundColor: '#000000', top: 0, left: 0, opacity: 0.15, borderRadius: 6}}></View>
            <View style={{height: 20, width: 50, borderRadius: 6, position: "absolute", left: 10, top: 10}}>
              <Image source={require('./assets/logo/white.png')} style={{height: undefined, width: undefined, resizeMode: "contain", flex: 1}} ></Image>
            </View>
            <View style={{position: "absolute", bottom: 0, left: 0, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between",paddingHorizontal: 10, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 16, fontWeight: "bold", color: "#ffffff", marginBottom: 10}}>Free G0-FOOD VOUCHER</Text>
                <Text style={{fontSize: 12, fontWeight: "500", color: "#ffffff"}}>Quick, before they run out !</Text>
              </View>
              <View>
                <TouchableOpacity style={{backgroundColor: '#61a756', alignSelf: 'stretch', borderRadius: 6}}>
                  <Text style={{fontSize: 12, color: '#ffffff', fontWeight: "bold", padding: 12, textAlign: "center"}}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 20}}></View>
        </View>
        {/* go food nearby */}
        <View style={{}}>
          <View style={{height: 20, width: 50, marginHorizontal: 20,}}>
            <Image source={require('./assets/logo/go-food.png')} style={{height: undefined, width: undefined, resizeMode: "contain", flex: 1}} ></Image>
          </View>
          <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row", marginVertical: 10, marginHorizontal: 20,}}>
            <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c"}}>Nearby Restaurants</Text>
            <Text style={{fontSize: 16, fontWeight: "bold", color: "#61a756"}}>See All</Text>
          </View>
          <ScrollView horizontal={true} style={{flexDirection: "row", paddingLeft: 20}} showsHorizontalScrollIndicator={false}>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 10}}>
                <Image source={require('./assets/dummy/go-food-kfc.jpg')} style={{height: undefined, width: undefined, resizeMode: "cover", flex: 1, borderRadius: 10}} ></Image>
              </View>
              <Text style={{fontSize: 14, fontWeight: "bold", color: "#1c1c1c"}}>KFC Aeon Mall</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 10}}>
                <Image source={require('./assets/dummy/go-food-gm.jpg')} style={{height: undefined, width: undefined, resizeMode: "cover", flex: 1, borderRadius: 10}} ></Image>
              </View>
              <Text style={{fontSize: 14, fontWeight: "bold", color: "#1c1c1c"}}>Bakmi GM Aeon Mall</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 10}}>
                <Image source={require('./assets/dummy/go-food-orins.jpg')} style={{height: undefined, width: undefined, resizeMode: "cover", flex: 1, borderRadius: 10}} ></Image>
              </View>
              <Text style={{fontSize: 14, fontWeight: "bold", color: "#1c1c1c"}}>Martabak Orins</Text>
            </View>
          </ScrollView>
          <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1,marginTop: 20, marginHorizontal: 20}}></View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", backgroundColor: "#ffffff", paddingVertical: 10 }}>
        <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Image source={require('./assets/icon/home-active.png')}></Image>
          <Text style={{ fontSize: 10, marginTop: 5, color: '#43A84A' }}>Home</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Image source={require('./assets/icon/order.png')}></Image>
          <Text style={{ fontSize: 10, marginTop: 5, color: '#545454' }}>Order</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Image source={require('./assets/icon/help.png')}></Image>
          <Text style={{ fontSize: 10, marginTop: 5, color: '#545454' }}>Help</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Image source={require('./assets/icon/inbox.png')}></Image>
          <Text style={{ fontSize: 10, marginTop: 5, color: '#545454' }}>Inbox</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Image source={require('./assets/icon/account.png')}></Image>
          <Text style={{ fontSize: 10, marginTop: 5, color: '#545454' }}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
