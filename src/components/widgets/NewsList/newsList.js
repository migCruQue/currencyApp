import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
import styles from './newsList.css';
import Button from '../Buttons/buttons';

class NewsList extends Component {
    state = {
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