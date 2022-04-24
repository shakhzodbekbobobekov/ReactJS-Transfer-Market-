import React, { Component } from "react";
import PlayerModal from "./Components/PlayerModal";

class App extends Component {
    state = {
        players: [],
        modalVisibilty: false,
        currentDate: ''
    };

    componentDidMount() {
        const players = [
            {
                fullName: 'I.Dostonbek',
                age: 22,
                club: 'R.M',
                value: 100,
            },
            {
                fullName: 'K.Javohir',
                age: 22,
                club: 'Barsa',
                value: 110,
            },
            {
                fullName: 'I.Azimjon',
                age: 21,
                club: 'Farqi yo`q',
                value: 120
            },
            {
                fullName: 'I.Jalolbek',
                age: 22,
                club: 'Barsa',
                value: 130,
            },
            {
                fullName: 'A.Jahongir',
                age: 22,
                club: 'Dinamo',
                value: 140,
            },
            {
                fullName: 'S.Bexruz',
                age: 22,
                club: 'Barsa',
                value: 150,
            },
            {
                fullName: 'O.Asadbek',
                age: 21,
                club: 'R.M',
                value: 160,
            },
        ];
        this.setState({
            players,
        });
    }

    removePlayer = (index) => {
        const players = this.state.players;
        players.splice(index, 1);
        this.setState({
            players,
        });
    }

    openModal = () => {
        this.setState({
            modalVisibilty: true
        })
    }

    closeModal = () => {
        this.setState({
            modalVisibilty: false
        })
    }

    changeCurrentDate = (type, isInc) => {
        const newCurrentData = this.state.currentDate ? this.state.currentDate
            : { fullName: 'none', age: 0, club: 'none', value: 0, }
        
        if (type === 'age') {
            if (isInc) {
                newCurrentData.age++
            } else if (newCurrentData.age < 1) {
                newCurrentData.age = 0
            } else {
                newCurrentData.age--
            }
        }

        if (type === 'value') {
            if (isInc) {
                newCurrentData.value++
            } else if (newCurrentData.value < 1) {
                newCurrentData.value = 0
            } else {
                newCurrentData.value--
            }
        }
        
        this.setState({
            currentDate: newCurrentData
        })
    }

    saveChange = () => {
        const { players, currentDate } = this.state;
        players.push(currentDate)
        currentDate.fullName = 'Player '
        this.setState({
            players,
            modalVisibilty: false
        })
    }
    
    clearCurrentData = () => {
        this.setState({
            currentDate: ''
        })
    }

    render() {
        const { players, modalVisibilty, currentDate } = this.state;
        return (
            <div className="market">
                <div className="container">
                    <h1 className="text-center">Transfer Market</h1>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary m-2" onClick={ this.openModal}>Add a Player</button>
                            { modalVisibilty ? <PlayerModal closeModal={this.closeModal} currentDate={currentDate} changeCurrentDate={this.changeCurrentDate} saveChange={this.saveChange} clearCurrentData={this.clearCurrentData} /> : "" }
                        </div>
                        <table className=" handleTable table table-hover table-sm ">
                            <thead className="thead-light">
                                <tr>
                                    <th>№</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Club</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{ index +1 }</td>
                                        <td>{ player.fullName }</td>
                                        <td>{ player.age }</td>
                                        <td>{ player.club }</td>
                                        <td>
                                            <span class="badge badge-primary">💰 ${ player.value }.00m</span>
                                            </td>
                                        <td>
                                            <button className="removeBtn btn btn-danger" onClick={() => this.removePlayer(index)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}

export default App;