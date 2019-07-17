import React from 'react';



class Mytitle extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>

    )
  }

}


const App= ()=>(
    <div className="App">
      <h3><Mytitle title='this is great learn'/></h3>
            <h3><Mytitle /></h3>

    </div>
  );


export default App;
