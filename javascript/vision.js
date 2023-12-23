var opts = {
    template: "@flourish/scatter",
    version: "5",
    container: "#chart",
    api_key: "ygQL3yuSGvKBpegZGP9Z8j5axyQJ86V1KdwAwtJhsIiN8JmS86fbqLJd5eLp2blF",
    bindings: {
        data: {
            x: "0",
            y: "0",
            metadata: ["country"]
        }
    },
    data: {
        data: [
            { country: "Argentina", pos_x: 1, pos_y: 2 },
            { country: "Brazil", pos_x: 2, pos_y: 4 },
            { country: "Colombia", pos_x: 3, pos_y: 9 },
        ]
    },
    state: {
        layout: {
            title: "This is an API Example"
        }
    }
};
