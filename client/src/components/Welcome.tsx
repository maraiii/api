// Using interface 
interface WelcomeProps{
    name: string ; 
}


function Welcome({name} : WelcomeProps){
    return <h2>Hello , {name} </h2>
}

export default Welcome;





// ------ WITHOUT INTERFACE -----

    // function Welcome(props){
    //     return <h2>Hello ,{props.name} </h2>
    // }

    // export default Welcome;

// Props are like function params
// They let you send to send you the value........


// Destructuring in simple props
// function Welcome({ name }) {
//   return <h2>Hello, {name}!</h2>;
// }


