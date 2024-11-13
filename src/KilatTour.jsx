import { Component, createElement } from "react";

import { PageTour } from "./components/PageTour";
import "./ui/KilatTour.css";

export class KilatTour extends Component {
    render() {
        return <PageTour {...this.props} />;
    }
}
