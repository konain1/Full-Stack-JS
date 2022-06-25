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
               <div><p>{this.state.msgTxt}</p></div>

                <button onClick={()=> this.changemsgTxt()}>Subscribe</button>
            </div>
        )
       
    }
}

export default Msg