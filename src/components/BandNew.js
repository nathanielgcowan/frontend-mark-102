import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BandNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            chord: '',
            instrument: '',
            album: '',
            genre: '',
            likes: '',
            name: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) { this.setState({ [event.target.name]: event.target.value });}

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        const band = {
            chord: this.state.chord,
            instrument: this.state.instrument,
            album: this.state.album,
            genre: this.state.genre,
            likes: this.state.likes, 
            name: this.state.name
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <div>Name:</div>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="chord" value={this.state.chord} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="instrument" value={this.state.instrument} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="album" value={this.state.album} onChange={this.onChange} />
                    </div>
                    <div>
                        <div>Name:</div>
                        <input type="text" name="genre" value={this.state.genre} onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="hidden" name="likes" value="0" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default BandNew;