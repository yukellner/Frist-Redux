import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { div } from '@material-ui/core';
console.log(GoogleMapReact)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MapCmp extends Component {
    state = {
        center: {
            lat: 32.0853,
            lng: 34.7818
        },
        zoom: 8
    };

    OnUpdateCenter = ({ target }) => {

        console.log('target.name', target.name)

        switch (target.name) {
            case 'TLV':
                this.setState({ center: { lat: 32.0853, lng: 34.7818 } })
                this.setState({ zoom: 12 })
                console.log('state',this.state)
                return
                case 'Hadera':
                    this.setState({ center: { lat: 32.4340, lng: 34.9197 } })
                    console.log('state',this.state)
                return
                case 'Bat-Yam':
                    this.setState({ center: { lat: 32.017136, lng: 34.745441 } })
                    console.log('state',this.state)
                return
            default:
                console.log('nothing happen')
        }

    }
    render() {
        return (
            <div>

            // Important! Always set the container height explicitly
                <div style={{ height: '50vh', width: '50%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCefItHyzOVLUAS0G1QzyoRhd0uEHy-TIA' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                        <AnyReactComponent
                            lat={32.0853}
                            lng={34.7818}
                            text="🚩"
                            
                        />
                        <AnyReactComponent
                            lat={32.017136}
                            lng={34.745441}
                            text="🚩"
                        />
                        <AnyReactComponent
                            lat={32.4340}
                            lng={34.9197}

                            text="🚩"
                        />
                    </GoogleMapReact>
                </div>
                <button onClick={this.OnUpdateCenter} name='TLV'>TLV</button>
                <button onClick={this.OnUpdateCenter} name='Hadera'>Hadera</button>
                <button onClick={this.OnUpdateCenter} name='Bat-Yam'>Bat Yam</button>

            </div>
        );
    }
}

