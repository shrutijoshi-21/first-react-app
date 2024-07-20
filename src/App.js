// import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import UseEffectExample from './components/UseEffectExample';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection';
import FeaturesSection from './components/Home/FeaturesSection';
import BlogsSection from './components/Home/BlogsSection';
import TestimonialSection from './components/Home/TestimonialSection';
import PricingSection from './components/Home/PricingSection';
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import About from './screens/About';
import Team from './screens/Team';
import Process from './screens/Process';
import Pricing from './screens/Pricing';
import Blog from './screens/Blog';
import ContactUs from './screens/ContactUs';
import Layout from './components/Layout';
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showName] = useState(false)
  return (
    <div className='login-container'>
      <input onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Id' type='text' />
      <input onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' type='password' />
      <button onClick={() => alert(`Hello, ${username} ${password}`)}> Submit</button>
      {showName ? <h1>Hello, {username} {password}</h1> : ""}
    </div>
  )
}
// const MyForm = () => {
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [showName, setShowName] = useState(false)
//   return (
//     <div className='form-container'>
//       <input onChange={(e) => setFirstName(e.target.value)} placeholder='first name' type="text" />
//       <input onChange={(e) => setLastName(e.target.value)} placeholder="lastname" type='text' />
//       <button onClick={() => alert(`hello, ${firstName} ${lastName}`)}>Submit</button>
//       {showName ? <p>Hello, {firstName} {lastName}</p> : ''}
//     </div>
//   )
// }
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  // componentDidMount() {
  //   console.log(this.props)
  //   console.log("myform added into dom")
  // }
  // componentWillUnmount() {
  //   console.log("myform remove from dom")
  // }
  render() {
    return (<h2>My form: {this.props.data}</h2>)
  }
}
// function App() {
//   // const [count, setCount] = useState(0)
//   // const handleClick = async () => {
//   //   setCount(count + 1)
//   // }
//   // const  handleDecrement = () => {
//   //   setCount(count - 1)
//   // }
//   return (
//     <div>
//     <Login />
//    {/* <h1>hello</h1>
//    <p>I am a react student</p>
//    <p>button clicked {count } times</p>
//    <button onClick={() => handleClick()}>Increment</button>
//    {count === 0  ? null : <button  onClick={() => handleDecrement()}>Decrement</button>}
//    <MyForm /> */}
//    </div>
//   );
// }
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       a: 1
//     }
// this.handleUpdate = this.handleUpdate.bind(this)
//   }

//   handleUpdate (){
//   // console.log("update")
//   this.setState({a: this.state.a + 1})
// }
// componentDidMount(){
//   // this.setState({a: this.state.a + 1})
// }
// shouldComponentUpdate(nextProps, nextState){
//   // console.log(this.state.a, nextState.a)
//   // if(nextState.a > 4){
//   //   return true
//   // }
//   // return false
//   return true
// }
// componentDidUpdate(){
//   // console.log("component updated successfully", this.state.a)
//   if(this.state.a > 6){
//     this.setState({a: 1})
//     return true
//   }

// }
// getSnapshotBeforeUpdate(_, prevState){
//   // console.log("Prev state", prevState)
//   return true
// }
// componentWillUnmount(){
//   alert("Thank you")
// }
//   render(){
//     return (
//       <>
//       <h1>Hello react {this.state.a}</h1>
//       <button onClick={this. handleUpdate}>Update</button>
// {this.state.a > 2 && <MyForm />}
//       </>
//     )
//   }
// }
// const App = () => {
//   const [show, setShow] = useState(false)
//   const [count, setCount]=useState(0)
//   useEffect(()=>{
// console.log("app component load")
// return () =>{
//   console.log("app component unmount")
// }
//   }, [])
//   return <>
//   <Header />
//   {show && <MyForm data={"Shruti"} />}
//   <button onClick={() => setShow(!show)}>on/off</button>
//   {count}
//   <button onClick={()=> setCount((prev) => prev + 1)}>Count ++</button> 
//   </>
// }
// const Card = () => {
//   return <div>card</div>
// }
// const App = () => {
//   return <div><Card /><Card /><Card /><Card /></div>
// }
const RouterContainer = () => {
  return <Routes>
  <Route  path="/" element={<Home />}></Route>
  <Route exact path="/about" element={<About />}></Route>
  <Route path="/team" element={<Team />}></Route>
  <Route path="/process" element={<Process />}></Route>
  <Route path="/pricing" element={<Pricing />}></Route>
  <Route path="/blog" element={<Blog />}></Route>
  <Route path="/contact-us" element={<ContactUs />}></Route>
  <Route path="*" element={<NotFound />}></Route>
</Routes>
}
const App = () => {
  return <Layout>

   <RouterContainer />
  </Layout>
}
export default App;
