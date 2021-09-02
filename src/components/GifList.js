import React from 'react'
// PRESENTATIONAL COMPONENT
// (oh god clean up this commentary)
// <GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.
// Okay, so this should be pretty simple (Narrator: It was not pretty simple.)

// But why is the App an arrow function though???

// class GifList extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render(){
//         return(
//             <div>
//                 {props.gifs.map()}
                
//             </div>
//         )
//     }
// ew
    // remember the thing passed in the props is an array of gifs, so we need to map over it to generate the correct ... layout. thingie. 

    const GifList = (props) => {
        // plus side, if it's an arrow function it doesn't need render() then return
        return(
            <div>
                
                {props.gifs.map(gif => <img src={gif.url} key={gif.url} alt="this is a gif"/>)}
            </div>
        )
    }
        // img src does NOT involve quotes its' ALREADY A STRING already a string already a string
        // also it turns out yes you do need the backslash at the end. ahhh old HTML habits.

export default GifList 
