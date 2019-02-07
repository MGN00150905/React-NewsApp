# React-NewsApp

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

The ```< Portal />``` component is used to render the ```js<Footer />``` component outside of its parent component's DOM node while preserving its position in the React hierarchy
