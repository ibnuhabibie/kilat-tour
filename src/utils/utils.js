export const getSteps = (stepList, autostart) => {
    const newSteps = stepList.map(stepObj => {
        const newStep = {
            element: "." + stepObj.className,
            popover: {
                title: stepObj.title,
                description: stepObj.description
            }
        };

        if (stepObj.side != "auto") newStep.popover.side = stepObj.side;
        if (stepObj.align != "auto") newStep.popover.align = stepObj.align;

        return newStep;
    });
    return newSteps;
};

export const convertToStyleObject = style => {
    return Object.keys(style).reduce((styleObj, key) => {
        var newKey = key;
        if (key.startsWith("--")) {
            newKey = key.replace("--mx-important-", "");
        }
        const camelCaseKey = newKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

        styleObj[camelCaseKey] = style[key];
        return styleObj;
    }, {});
};
