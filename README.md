# React-NewsApp

[See the Code in action](https://ca1-news.firebaseapp.com/)

A Simple front end news app that feeds news from all over the world to the users. This app contains one main component called ``` <Routing /> ``` This Component is essentially the navbar of the application. There are five main components that extend the base component and they are as follows:

```js
<App />
<Bitcoin />
<Brexit />
<Syria />
<Sources />
```
These class components have their own reusable subcomponents that are:

```js
<Article />
<Dropdown />
<Footer />
<Header />
<LikeButton />
<SearchInput />
<SourceCard />
<Toggle />
<Portal />
```

The ```< Portal />```  is used to render the ```<Footer />``` component outside of its parent component's DOM node while preserving its position in the React hierarchy
