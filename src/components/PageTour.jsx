import { Component, createElement } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { convertToStyleObject, getSteps } from "../utils/utils";
import { FloatingButtonIcon } from "./FloatingButtonIcon";

export class PageTour extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.listStep) return;

        this.driverObj = new driver({
            showProgress: true,
            steps: getSteps(this.props.listStep),
            nextBtnText: this.props.nextBtnText,
            prevBtnText: this.props.prevBtnText,
            doneBtnText: this.props.doneBtnText,
            allowClose: this.props.allowClose,
            animate: this.props.animate,
            smoothScroll: this.props.smoothScroll,
            overlayColor: this.props.overlayColor,
            overlayOpacity: this.props.overlayOpacity,
            allowKeyboardControl: this.props.allowKeyboardControl,
            popoverClass: this.props.popoverClass || "",
            popoverOffset: this.props.popoverOffset
        });

        this.checkElementReady = setInterval(() => {
            const element = document.querySelector(".pageheader-title");
            if (element && element.offsetParent !== null) {
                clearInterval(this.checkElementReady);
                if (this.props.autoStart) this.driverObj.drive();
            }
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.checkElementReady);
        if (this.driverObj) {
            this.driverObj.reset();
        }
    }

    _startTour = () => {
        try {
            this.driverObj.drive();
        } catch (error) {
            console.error("Error starting the tour:", error);
        }
    };

    render() {
        return (
            <div>
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
                <div
                    className={`floating-tour-btn ${this.props.class}`}
                    onClick={this._startTour}
                    style={convertToStyleObject(this.props.style)}
                >
                    <FloatingButtonIcon tourIcon={this.props.tourIcon} />
                </div>
            </div>
        );
    }
}
