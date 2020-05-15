import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {
    state = {
        news:[]
    }

    componentWillMount(){
        axios.get(` http://localhost:3004/news?_start=0&_end=4`)
        .then(response => {
            this.setState({
                news: response.data
            })
        })
    }

    render() {
        console.log(this.state.news)
        return (
            <SliderTemplates 
            data={this.state.news}
            type="featured" />
        )
    }
}

export default NewsSlider; 