// const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
// const Hello = () => (<h1>Hello</h1>);
// const World = () => (<h2>World!</h2>);

// class Greet extends React.Component {

//   render() {
//     return <div><Hello /><World /></div>;
//   }
// }

// const Hello = () => <h1>Hello</h1>
// function Hello() {
//     return (<h1>Hello</h1>)
// }
// function World() {
//     return (<h2>World!</h2>)
// }
// // const World = () => <h2>World!</h2>;

// class Greet extends React.Component {
//     render() {
//         return <div><Hello /></div> <div><World /></div>
//     }

function Hello (props){
    return <h1>Hello</h1>
  }

  function World (props){
    return <h2>World!</h2>
  }

  class Greet extends React.Component {
    constructor(props){
      super(props);
      }

     render() {
        return (
          <div>
            <Hello />
            <World />
          </div>
        );
    }
}
console.log(
    Hello(),World()
)