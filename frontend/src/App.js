import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateUserScreen from './screens/UpdateUserScreen'
import UserOrderScreen from './screens/UserOrderScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <div className="container">
          <Route path='/order/:id' component={OrderScreen}/>
          <Route path='/payment' component={PaymentMethodScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/placeorder' component={PlaceOrderScreen}/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/update-user' component={UpdateUserScreen}/>
          <Route path='/my-orders' component={UserOrderScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/admin/userlist' component={UserListScreen}/>
          <Route path='/admin/orderlist' component={OrderListScreen}/>
          <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
          <Route path='/admin/productlist' component={ProductListScreen}/>
          <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>
          <Route path='/' component={Homescreen} exact/>
          <Route path='/search/:keyword' component={Homescreen}/>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
