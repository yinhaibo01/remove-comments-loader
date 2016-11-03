# `remove-comments-loader` - A tiny loader to remove comments in your code.


## Usage

```javascript
module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|css)$/,
                loader: "remove-comments-loader"
            }
        ]
    }
}
```

