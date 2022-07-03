import React, { Component } from 'react'

class Lose extends Component {
    state = {  } 
    render() { 
        return (
        <div className='main-bg-add-win main-bg-all'>
            <div className='still still-sub still-sized-lose'>
                <h1 className="win-head">Try watching this video before continuing the practice test again!</h1>
                <div className="prize">
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/qM7B2nwpV1M"
                        frameBorder="0"
                        allow="autoplay; encrypted-media fullscreen;"
                        title="video"
                    />
                </div>
                <button className="btn-tg btn-tg-lose" onClick={() => window.location.reload()}>Try Again</button>
            </div>
        </div>
        );
    }
}
 
export default Lose;