import React from 'react'
// what else do we need? 
// "In our app, the <GifListContainer /> will be responsible for fetching the data from the Giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop."
// "It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop."
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    // remember? I guess? we don't need the constructor here if all we're doing is determining state
    // state is an empty array in which to put a bunch of gifs. We'll call it gifstack to differentiate from giflist I guess
    state = {
        gifstack: []
    }

    render() {
        return(
            // So we're rendering a search and a list. search should probably go on top of list
            // still hate the inability to mix comments and fake-HTML
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifstack} />
            </div>
            // GifList takes a prop that is an array of gifs, remember, so we throw that in
            // GifSearch needs a fetch function, and since this is where we put the submit handler form per instructions...
        )
    }

    // no const? thank you vscode? I think?
    fetchGifs = (queryString) => { 
        // this is a fetch request so we're using the URL provided. roughly.
        // why we're using a live site this early I do not know but oh well
        // time for string interpolation!
        fetch(`https://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=YOUR API KEY&rating=g`)
        .then(res => res.json()) // don't forget the formatting on the next bit is a little weird
        .then(({data}) => {
            this.setState({ gifStack: data.map( gif => ({ url: gif.images.original.url}) 
            )})
        })
        // there are too goddamn many curly braces and parentheses thanks I hate it.
        /*  FORMATTING
        ({dataFromFetch}) => {
            this.command({ stateVar: dataFromFetch.map(item => ({ key: item.dataKey.value }) 
            ) <-- end of item => key: value
            }) <-- end of stateVar: etc
        } <-- end of curlybraces pf dataFromFetch

        TOO MANY CURLY BRACES
        */
    }

    componentDidMount() {
        this.fetchGifs()
    }

}

export default GifListContainer