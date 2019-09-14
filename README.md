# JS Recruitment Task

## Description

We would like you to create an application that will display list of news fetched from The Guardian. You should use their API, which can be found here: [https://open-platform.theguardian.com/](https://open-platform.theguardian.com/)

Goal of this task is to check your JavaScript knowledge so please don't use any additional libraries, you can use `fetch` for http requests.

We have provided sample html + css styling, so you can focus on writing JS code.

## Requirements

- Display list of news from last 30 days
- Add pagination: 10 items per page
- Add news filtering based on section selection from dropdown. You can restrict it only to: `sport`, `books`, `business`, `culture`
- Add search functionality for filtering news content based on provided phrase
- Each news list element should have following elements:
  - Title
  - Section name
  - Date of publication
  - Link to full article (open in new window)
  - "Read Later" button
- Clicking "Read later" button should add selected news to the "Read later" section on the right. Those elements should be stored somewhere and displayed even after refresh.
- Each element from "read later" can be removed by clicking "delete" button
- (Bonus) It would be beneficial if you would write some kind of tests, either unit or integration
- (Bonus) If you will find time, please briefly describe your approach to solving this task.

## Tools used

In order to keep things simple we used only really small number of libs for this boilerplate:

- [Parcel](https://en.parceljs.org) as a bundler
- [Milligram](https://milligram.io/) and [Normalize](https://necolas.github.io/normalize.css/) for some simple styling
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for static code check
- [PostCSS](https://postcss.org/) with [Autoprefixr](https://autoprefixer.github.io/) for css compatibility

# Tsimur Asayonak comments

**Added Main Libs**

- `react` - as a main framework and `react-dom` as a helper for react.js
- `typescript`, `tslint`, `tslint-config-airbnb`, `tslint-react`, `@types/react` - libs for typescript as a main Types checking
- `babel-polyfill`, `babel-preset-stage-0` - libs for babel

**Checklist from Task**

- ✅ Display list of news from last 30 days
- ✅ Add pagination: 10 items per page
- ✅ Add news filtering based on section selection from dropdown. You can restrict it only to: `sport`, `books`, `business`, `culture`
- ✅ Add search functionality for filtering news content based on provided phrase
- ✅ Each news list element should have following elements:

- Title
- Section name
- Date of publication
- Link to full article (open in new window)
- "Read Later" button
  - ✅ Clicking "Read later" button should add selected news to the "Read later" section on the right. Those elements should be stored somewhere and displayed even after refresh.
  - ✅ Each element from "read later" can be removed by clicking "delete" button
  - 🚫 (Bonus) It would be beneficial if you would write some kind of tests, either unit or integration
  - ✅ (Bonus) If you will find time, please briefly describe your approach to solving this task.

**Small Description of Task**
In this task we you React.js as a main framework and TypeScript as a main Types checking. Starting point is a main.jsx. Main component - App.tsx component.
Main code of application you can find inside `HomeScreen.container.tsx`

`HomeScreen.container.tsx.` - has main function:

- `fetchNewsMethod` - method for fetching news data
- `fetchReadLaterNews` - method for getting read later news data from localStorage
- `getQuesryParamsFromState` - method for parsing query params to component state
- `mapNewsToState` - method for mapping news data to component state
- `updateParams` - method for updating query params inside component state
- `onSetErrorMessage` - method for set request error to component state
- `deleteErrorMessage` - method for delite error from component state
- `onChangeSection` - method for changing section value inside request params
- `onChangeSearchInput` - method for changing search text value inside request params
- `onAddItemToReadLaterNews` - method for adding news to readLaterNews list. This method will save news item in localStorage
- `onDeleteNewsFromReadLaterList` - method will delete news from readLaterNews list and from localStorage

`HomeScreen.container.tsx.` - has render method with components:

- `<ScreenHeader />` - component will show screen header
- `<FiltersSection />` - component will show components for filtering news list
- `<NewsComponent />` - component will show components with news

And We created separate components for all sections, buttons, error messages and forms. We created helpers for fetch methods and for method wich will save and delete news on localStorage.
Unfortunately we did now create some kind of tests, either unit or integration =(
