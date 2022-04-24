import React, { Component } from 'react'

export default class PlayerModal extends Component {

    closeModal = () => {
        this.props.closeModal()
    }

    changeCurrentDate = (type, isInc) => {
        this.props.changeCurrentDate(type, isInc)
    }

    saveChange = () => {
        this.props.saveChange()
    }
    
    componentWillUnmount() {
        this.props.clearCurrentData()
    }

    render() {
      const {currentDate} = this.props
    return (
        <div className='card'>
            <div className="card-header">Add Player Modal</div>
            <div className="card-body">
                <div className="row text-center">
                    <div className="col-5">
                        <h5>Player's age:</h5>
                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={()=> this.changeCurrentDate('age', false)} >-</button>
                            <button className="btn variable"> { currentDate ? currentDate.age : 0 } </button>
                            <button className="btn btn-info" onClick={()=> this.changeCurrentDate('age', true)}>+</button>
                        </div>
                    </div>
                    <div className="col-2">
                        <img className='img-fluid' src="https://www.sportyfied.com/thumbs/regular/select_player_shirt_ss_argentina_striped_bluewhite_700x700.png" alt="" />
                    </div>
                    <div className="col-5">
                        <h5>Player's price:</h5>
                        <div className="btn-group">
                            <button className="btn btn-secondary" onClick={()=> this.changeCurrentDate('value', false)}>-</button>
                            <button className="btn variable"> 💰 ${ currentDate ? currentDate.value : 0 }.00m  </button>
                            <button className="btn btn-info" onClick={()=> this.changeCurrentDate('value', true)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning" onClick={this.closeModal}>Cansel</button>
                <button className="btn btn-success m-2"  onClick={this.saveChange}>Save change</button>
            </div>
        </div>
    )
  }
}
