
require('babel-register')

import React from 'react'

import path from 'path'

import { renderToString } from 'react-dom/server';

import { RouterContext, match } from 'react-router';

import ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'

import configureStore from '../client/store'

import routes from '../client/routes'

import {fetchList} from '../client/actions'

var express = require("express");

const app = express()

const renderFullPage = (html, preloadState) => {
    return `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>anlong-project</title>
      <link rel="stylesheet" href="//at.alicdn.com/t/font_681192_5oqpxwtumcej0pb9.css">
    </head>
    <body>
      <div id="root"><div>${html}</div></div>
      <script>window.__INITIAL_STATE__ =${JSON.stringify(preloadState)}</script>
      <script src="//at.alicdn.com/t/font_681192_5oqpxwtumcej0pb9.js"></script>
      <script src="/static/client/bundle.js"></script>
    </body>
   </html>
   `
}

const handleRender = (req,res)=>{
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
          // res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
          res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          let store = configureStore();
          // console.log(renderProps.components[1])

          // 遍历组件，其中 WrappedComponent 就是其原始组件
          // let coms = renderProps.components.map(c => c.WrappedComponent);

          // 我们只需要得到定义了 fetchData 方法的组件
          // let coms = renderProps.components.filter(c => !!c.WrappedComponent.fetchData);
          // // 提取所有 fetchData
          // let fetchs = coms.map(c => c.WrappedComponent.fetchData);
          // // 然后执行所有 fetchData
          // let tasks = [];
          // fetchs.map(f => {
          //   let t = f(store.dispatch, renderProps.params);y
          //   if (Array.isArray(t)) {
          //       tasks = tasks.concat(t);
          //   } else {
          //       tasks.push(t);
          //   }
          // });

          // console.log(tasks)
          
          Promise.all([
            store.dispatch(fetchList())
          ])
          .then(() => {

            const state = store.getState();

            const html = renderToString(
              <Provider store={store}>
                    <RouterContext {...renderProps} />
              </Provider>
            );
            res.end(renderFullPage(html, store.getState()));
      
          });
          // await store.dispatch(fetchList())

          // console.log(2222)

          // const html = renderToString(

          //     <Provider store={store}>

          //           <RouterContext {...renderProps} />
                    
          //     </Provider>

          //   );
          // res.end(renderFullPage(html, store.getState()));

        } else {

          res.status(404).end('Not found');

        }
      });

}

app.use('/static', express.static('dist'));

app.use('/',express.static('server'))

app.use(handleRender)

app.listen(3011, (error) => {
    if (error) {
         console.error(error)
    }
})

export default app