import React,{Component} from 'react';


class Msg extends Component {

    constructor(){
        super()

        this.state = {
            msgTxt:'Welcome Visitor'
        }
    }

    changemsgTxt(){
        this.setState({
            msgTxt:'Thank you for subscribing'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.msgTxt}</h1>
                <button onClick={()=> this.changemsgTxt()}>Subscribe</button>
            </div>
        )
       
    }
}

export default Msg