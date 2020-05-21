import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './cardInfo.css';

const CardInfo = (props) => {

    const sourceName = (sources, source) => {
        let data = sources.find((item) => {
            return item.id === source
        });
        if(data){
            return data.newspaper;
        }
    }

    return (
        <div className={styles.cardInfo}>
            <span className={styles.sourceName}>
                {sourceName(props.sources, props.source)}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o" />
                {props.date}
            </span>
        </div>
    );
};

export default CardInfo;