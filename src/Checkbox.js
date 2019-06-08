import React from "react";


class Checkbox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
}
hamndle = () => {
    this.setState({
        checked: !this.state.checked
    })
    if (this.props.onChange ) {
        this.props.onChange(this.state.checked);
    }
}
render() {
    const {id} = this.props;
    return (
        <>
        <input
        type="checkbox"
        className="flat-checkbox"
        id={`check_large${id}`}
        checked={this.state.checked}
        onChange={this.hamndle}
      />
      <label for={`check_large${id}`}>{this.props.label}</label>
      </>
    );
}
}

export default Checkbox;