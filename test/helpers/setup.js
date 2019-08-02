import 'babel-register'
import 'babel-polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

var jsdom = require('jsdom')
const { JSDOM } = jsdom

const { document } = (new JSDOM('<body><div id="app"></div></body>')).window

// global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.document = document
global.window = document.defaultView
global.navigator = window.navigator
