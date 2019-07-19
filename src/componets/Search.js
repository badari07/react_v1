import React from 'react'
import data from '../../public/data'
import ShowCard from './ShowCard'
class Search extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     searchTerm: 'this is search tearm'
  //   }
  //   this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  // }

  // handleSearchTermEvent (e) {
  //   this.setState({ searchTerm: e.target.value })
  // }
  state = {
    searchTerm: ''
  }

  handleSearchTermEvent = (e) => this.setState({ searchTerm: e.target.value })

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input onChange={this.handleSearchTermEvent} value={this.state.searchTerm} className='search-input' type='text' placeholder='search' />
        </header>
        <div className='shows'>
          {data.shows
          .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

export default Search
