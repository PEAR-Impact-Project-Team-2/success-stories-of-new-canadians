import React from 'react';
import { Link } from 'gatsby';
import Checkbox from '@material-ui/core'
import '@styles/components/Button.scss';

export class DynamicCheckBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: props.defaultChecked, chk: 2, itemName = props.itemName, click=props.onClick}
    }
  
    handleChange = event => {
      console.log("changed" + this.state.value + " " + chk.checked);
      //this.setState({value: !this.state.value})
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <CheckBox
            onClick={this.handleChange} name={item} label={item} checked={!!props.defaultChecked}>
        </CheckBox> 
      )
    }
  }


  