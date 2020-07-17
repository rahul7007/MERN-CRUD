import React, { Component } from "react";
import api from '../api'

class Transaction extends Component {
    state = {  }

    save = () =>{
        var myid = 5
        var myname = "YYY"
        var phone = 7000
        const payload = {myid, myname, phone}
        console.log("WORKING")
        api.insertData(payload).then(res => {
            console.log(res)
        })
    }

    show = () =>{
        api.displayData().then(res => {
            console.log(res.data.data[0])
        })
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.save}>submit</button>
                <button onClick={this.show}>view</button>
                {/* <form>
                    <label>myid :</label> <input type="text" />
                    <label>myname :</label> <input type="text" />
                    <label>phone :</label> <input type="text" />
                    <button onClick={this.save}>submit</button>
                </form> */}
            </div>
         );
    }
}
 
export default Transaction;