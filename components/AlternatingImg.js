import React from 'react'

//probably map the data into a child component, then use that child component to determine
//which side of the page the image is rendered on.  On smaller screens just remove 
//the image from the flow altogether.  

class AlternatingImg extends React.Component {
    constructor(props){
        super(props)
        this.state={selected:0}
    }

    render () {
        const titleArray = this.props.data.title
      return <div>
        {titleArray.map((object, i) => 
        <div>
            <AlternatingItem title={object} index={i}/>
        </div>
        )}
        </div>
    }
  }


  class AlternatingItem extends React.Component {

//tomorrow pick up here. You just need to access props and render respective elements
//depending on whether the key is odd or even.  
    render () {
        if(this.props.index%2 === 0){
        return <div>
            {console.log(this.props.index)}
            {console.log(this.props.title.image)}
            <img src={this.props.title.image}/>
        </div>
        }else{
            return <div>
                this is not the key {this.props.index}
            </div>
        }
    }
}

export default AlternatingImg