import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

//Redux

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';



class App extends Component {
    render(){
        return(
            <Provider store = {createStore(reducers)}>
                <View style = {{flex: 1}}>
                    <Header headerText = 'Tech Stack'/>
                    <LibraryList/>
                </View>
            </Provider>
        );
    }
}   

export default App;