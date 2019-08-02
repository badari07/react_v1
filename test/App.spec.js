/* eslint-env mocha */

// const React = require('react')
// const Search = require('../src/componets/Search')
// const  { expect } = require('chai')
// const  { shallow } = require('enzyme')
import React from 'react'
import Search from '../src/componets/Search'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { shows } from '../public/data'
import showcard from '../src/componets/ShowCard'

describe('<search/>', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(showcard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.getDOMNode().value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
