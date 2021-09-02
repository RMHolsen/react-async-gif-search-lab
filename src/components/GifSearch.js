import React from 'react'

class GifSearch extends React.Component {

    state = {
        query: ""
        // empty string, so you can fill it with whatever you want later
        // a space is NOT AN EMPTY STRING
    }

    handleSubmit = e => {
        e.preventDefault()
        // don't forget to prevent the default, whatever the "default" is
        this.props.fetchGifs(this.state.query)
        // calling the fetchGifs function that we wrote in GifListContainer and that got passed through in props
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
            </form>
          </div>
        )
        // and then basically the submit button, the submit event, putting the query string received in the text field into the query key of state. thingie. words. not friends.
      }
}

export default GifSearch