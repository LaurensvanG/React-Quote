import React from "react";
import styles from '../../styles/Button.module.sass';
import Button from 'react-bootstrap/Button';

export default function NewButton() {
    return (
      <div> 
        <Button variant="primary" id={styles.quoteButton}>
            Quote
        </Button>
      </div>
    )
  }