import React from "react";

class Reset extends React.Component {
  renderPlaying() {
    return (
      <>
        <form>
          <input
            type="submit"
            className="btn btn-light"
            style={{ height: 40 }}
            value="Reset"
          />
        </form>
      </>
    );
  }

  renderRestart() {
    return (
      <>
        <form>
          <input
            type="submit"
            className="btn btn-light"
            style={{ height: 40 }}
            value="Start again"
          />
        </form>
      </>
    );
  }

  render() {
    if (this.props.finish) {
      return this.renderRestart();
    } else {
      return this.renderPlaying();
    }
  }
}
export default Reset;
