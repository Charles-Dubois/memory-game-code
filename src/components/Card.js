import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/images/backside.jpg",
      face: false,
      found: false,
    };
    this.showCard = this.showCard.bind(this);
    this.turnFalse = this.turnFalse.bind(this);
  }
  turnFalse() {
    this.setState({ face: false });
  }
  showCard() {
    this.setState({ face: true });
  }

  renderBack() {
    return (
      <div
        className="col-2 card d-flex justify-content-center"
        onClick={() => {
          this.props.onClick(this.props.cardProps.value);
          this.showCard();
        }}
        style={{ padding: 0 }}
      >
        <img
          src={this.state.path}
          alt="Carte retournée"
          style={{ width: "100%", height: "9rem" }}
        />
      </div>
    );
  }

  renderFace() {
    return (
      <div
        className="col-2 card  d-flex justify-content-center"
        style={{ padding: 0 }}
      >
        <img
          src={this.props.cardProps.path}
          alt="Carte face"
          style={{ width: "100%", height: "9rem" }}
        />
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentValue2 !== this.props.currentValue2) {
      if (this.props.currentValue1 !== this.props.currentValue2) {
        if (
          this.props.currentValue1 !== this.props.cardProps.value ||
          this.props.currentValue2 !== this.props.cardProps.value
        ) {
          setTimeout(this.turnFalse, 500);
        }
      }
    }
    if (
      this.props.currentValue1 === this.props.currentValue2 &&
      this.props.currentValue2 !== ""
    ) {
      if (
        this.props.currentValue1 === this.props.cardProps.value &&
        this.props.currentValue2 === this.props.cardProps.value
      ) {
        this.setState({ found: true });
      }
    }
  }

  render() {
    if (this.state.found) {
      return this.renderFace();
    } else if (!this.state.face) {
      return this.renderBack();
    } else if (this.state.face) {
      return this.renderFace();
    }
  }
}

export default Card;
