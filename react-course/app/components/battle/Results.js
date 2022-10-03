import React from "react";
import { battle } from "../../utlis/api";



export default class Results extends React.Component {d
  componentDidMount(){
    const {playerOne, playerTwo} = this.props
    battle([playerOne, playerTwo])
    .then((players) => console.log(players))
    .catch((error) => console.warn(error))

  }
  render() {


    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}