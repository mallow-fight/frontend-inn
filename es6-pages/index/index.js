import {createStore} from 'redux';
const app = getApp()
Page({
  onLoad() {
    console.log(app)
    console.log('createStore', createStore)
    console.log('test')
  }
})