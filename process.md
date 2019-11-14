# Deploy:

https://medium.com/@kozyreva.hanna/nuxt-js-gh-pages-deployment-73b88aa3aa65

# Resize:

https://github.com/David-Desmaisons/Vue.resize?ref=madewithvuejs.com
npm install vue-resize-directive --save

# CSV loader:

### 1. https://www.npmjs.com/package/csv-loader

#### 1.1 npm i csv-loader

#### 1.2 nuxt.config.js:

```javascript
const config = {

  // …

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      });
    }
  }
```

### 2. https://www.papaparse.com/

#### 2.1 npm install papaparse
