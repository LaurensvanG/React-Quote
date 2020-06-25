import React from "react";
import styles from '../../styles/Button.sass';
import Button from 'react-bootstrap/Button';

export default function NewButton(props) {
    return (
      <div> 
        <Button variant="primary" id={styles.quoteButton} onClick={props.toggleThemeType} >
            Switch theme
        </Button>
      </div>
    )
  }