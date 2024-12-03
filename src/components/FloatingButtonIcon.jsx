import { Component, createElement } from "react";

export class FloatingButtonIcon extends Component {
    render() {
        switch (this.props.tourIcon.value.type) {
            case "image":
                // return <pre>{JSON.stringify(this.props.tourIcon, null, 2)}</pre>
                return <img src={this.props.tourIcon.value.iconUrl} alt="icon" />;
            case "glyph":
                return <span className={`${this.props.tourIcon.value.iconClass} glyphicon`}></span>;
            case "icon":
                return <i className={this.props.tourIcon.value.iconClass} />;
        }
    }
}
