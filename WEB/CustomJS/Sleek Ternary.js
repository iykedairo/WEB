var integer = function (value, default_value) {
        value = resolve(value);
        return (typeof value === "number") ? Math.floor(value): (typeof value === "string")? value.charCodeAt(0) : default_value;
    };