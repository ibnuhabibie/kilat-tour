import { Component, createElement } from "react";

export class preview extends Component {
    _FloatingButtonIcon = ({ tourIcon }) => {
        if (!tourIcon) {
            return (
                <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g fill="#000000">
                        <path d="M12.75 1a.75.75 0 000 1.5h.69l-1.97 1.97a.75.75 0 001.06 1.06l1.97-1.97v.69a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75h-2.5z" />

                        <path
                            fill-rule="evenodd"
                            d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.751.751 0 101.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 00-1.5 0v4.25H11c-.878 0-1.64.158-2.25.467v-6.55c0-.788.376-1.42 1.12-1.722a.75.75 0 00-.561-1.39 3.27 3.27 0 00-1.31.941A3.13 3.13 0 007.773 3C7.106 2.354 6.154 2 5 2H1.25zm6 3.417c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467v-6.55z"
                            clip-rule="evenodd"
                        />
                    </g>
                </svg>
            );
        }
        switch (tourIcon.type) {
            case "image":
                return <img src={tourIcon.imageUrl} alt="icon" />;
            case "glyph":
                return <span className={`${tourIcon.iconClass} glyphicon`}></span>;
            case "icon":
                return <i className={tourIcon.iconClass} />;
        }
    };

    render() {
        return (
            <div>
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
                <div className={`floating-tour-btn ${this.props.class}`} style={this.props.styleObject}>
                    <this._FloatingButtonIcon tourIcon={this.props.tourIcon} />
                </div>
            </div>
        );
    }
}

export function getPreviewCss() {
    return require("./ui/KilatTour.css");
}
