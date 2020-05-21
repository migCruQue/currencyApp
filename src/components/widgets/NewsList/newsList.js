import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
import styles from './newsList.css';
import Button from '../Buttons/buttons';
import CardInfo from '../../widgets/CardInfo/CardInfo';

class NewsList extends Component {
    state = {
        sources: [],
        items:[],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
    }

    renderNews = (type) => {

        let template = null; 
        switch(type){
            case('card'):
                template = this.state.items.map( (item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:styles.newsList_wrapper,
                            enterActive:styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={styles.newsList_item}>
                                <Link to={`news/${item.id}`}>
                                    <CardInfo sources={this.state.sources}
                                              source={item.source}
                                              date={item.date}  />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>  
                    </CSSTransition>
                    
                ))
                break;
            default:
                template = null;
        }

        return template;
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {

        if(this.state.sources.length < 1){
            axios.get(`${URL}sources`)
            .then(response => {
                this.setState({
                    sources: response.data
                })
            })
        }

        axios.get(`${URL}news?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }

    render() {
        
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    text="Load More News"
                />
            </div>
        );
    }
}

export default NewsList;