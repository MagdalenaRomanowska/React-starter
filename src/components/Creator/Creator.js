import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => { //wywołuje funkcję przekazaną w propsie action 
    //z argumentem w postaci bieżącej wartości pobranej ze stanu. 
    //Oprócz tego, zarówno guzik "OK", jak i "Cancel", usuwają zawartość 
    //wpisaną w polu tekstowym, oraz ukrywają guziki.
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    this.setState({
      value: '',
      visibleButtons: false,
    });
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;

//Komponent funkcyjny Button, wykorzystywany w komponencie Creator, służy do wyświetlania guzika.