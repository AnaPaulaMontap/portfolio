import React, { Component } from "react";
import { TimelineLite} from "gsap/all";
import './portada.css'


class Portada extends Component {
	
	constructor(props){
		super(props);

        this.logoTl = new TimelineLite({delay: 1});
        this.firstBg = null;
        this.secBg = null;
        this.word = null;
        this.word1 = null;
		
	}

	// add instances to the timeline
	componentDidMount(){
        this.logoTl
        
    .to(this.firstBg, 0.2, {scaleX:1})
    .to(this.secBg, 0.2, {scaleX:1})
    .to(this.word, 0.1, {opacity:1}, "-=0.1")
    .to(this.word1, 0.1, {opacity:1}, "-=0.1")   
    .to(this.firstBg, 0.2, {scaleX:0})
    .to(this.secBg, 0.2, {scaleX:0});

	}

	render(){
		return <div className="container">								
					

                    <p class="text"> 
                    <span class="text__first">
                    <span class="text__word" ref={ span => this.word1 = span }> Ana Paula Monsalve </span>
                    <span class="text__first-bg" ref={ span => this.firstBg = span}></span>
                    </span>
                    <br/>
                    <span class="text__second">
                    <span class="text__word" ref={ span => this.word = span }>FrontEnd Developer</span>
                    <span class="text__second-bg"ref={ span => this.secBg = span}></span>
                    </span>
                    </p>


					{/* BUTTONS */}
					<div className="my-3 btn-group">						
						<button
							className="restart"
							onClick={() => this.logoTl.restart()}
						>Repetir</button>
					</div>

				</div>;
			
	}

}

export default Portada;

