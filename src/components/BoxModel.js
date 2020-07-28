import React,{Component} from 'react'
import '../App.css'
import {MdDeleteForever,MdBackspace,MdAddBox} from 'react-icons/md'
import logo from '../logo.svg'
import TicketList from './TicketList'

 class BoxModel extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            NumbInput:[],
            result:''
        }
        this.randomgen=this.randomgen.bind(this);
    }
    handlebutton(e){
        const value=e;
        console.log(value);
       const reqnum=''
        switch(value){
            case 'add' :{
                this.setState({result:''})
            }
            case 'backspace':{
               const rew= reqnum.toString.length-1
               reqnum=rew;
               break
            }
            case 'clear':{
                this.setState({result:''})
                break
            }
            default :{
          
               const req= reqnum +value.toString()
                console.log(req)            }}
        
    }
        randomgen =() =>{
            console.log('click')
            const rand=Math.floor(100000 + Math.random() * 999999);
            this.setState({
                count:this.state.count+1,
                result:rand
            })
            
            console.log(this.state.count)
        }
     render(){
         const handlebutton=this.handlebutton;
        
        return(
            <div className='main-box'>
            
            <div className='box-model'>
            <h4 className='tc2'>Enter 6 digits only</h4>
            <h3 id='resno'>123456</h3>
            <button value='1' onClick={e => handlebutton(e.target.value)}>1</button>
            <button value='2' onClick={e => handlebutton(e.target.value)}>2</button>
            <button value='3' onClick={e => handlebutton(e.target.value)}>3</button>
            <button value='4' onClick={e => handlebutton(e.target.value)}>4</button>
            <button value='5' onClick={e => handlebutton(e.target.value)}>5</button>
            <button value='6' onClick={e => handlebutton(e.target.value)}>6</button>
            <button value='7' onClick={e => handlebutton(e.target.value)}>7</button>
            <button value='8' onClick={e => handlebutton(e.target.value)}>8</button>
            <button value='9' onClick={e => handlebutton(e.target.value)}>9</button>
            <button value='backspace' onClick={e => handlebutton(e.target.value)} ><MdBackspace style={{fontSize:'15px'}} /></button>
            <button value='0' onClick={e => handlebutton(e.target.value)}>0</button>
            <button value='clear' onClick={e => handlebutton(e.target.value)}><MdDeleteForever style={{fontSize:'18px'}}/></button>
            <button  value='add' onClick={e => handlebutton(e.target.value)} id='addbtn'><MdAddBox style={{fontSize:'21px',paddingTop:'6px'}}/>Add Ticket</button>
             </div>
             <TicketList value={this.state.result} />
             <div className='randomticketimg'>
             <button onClick={this.randomgen}> <img src={logo} className="App-logo" alt="logo" />
             <p className='tc2'>Click to generate random number ticket </p></button>
            
             </div>
             </div>
        )
     }
   
}


export default BoxModel;