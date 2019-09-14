import * as React from 'react';
// components
import { ScreenHeader } from '../components/common/ScreenHeader';
import { FiltersSection } from '../components/filters/FiltersSection';
import { NewsComponent } from '../components/news/News.component';
// interfaces
import { NewsType } from '../interfaces/news';
import { ErrorMessage } from '../interfaces/api';
// api method
import { SearchNews } from '../utils/api/news';
// utils
import {
  addItemToStorage,
  getAllReadLaterNews,
  removeItemFromStorage,
} from '../utils/api/readLaterNews';
import { getFromDate } from '../utils/common';

interface Props {};
interface State {
  params: {
    searchingText: string
    selectedSection: string
    page: string,
  }
  news: NewsType[]
  readLaterNews: NewsType[]
  error: ErrorMessage
};

export class HomeScreenContainer extends React.PureComponent<Props, State> {
  searchInputTimeout = null;

  state = {
    params: {
      searchingText: '',
      selectedSection: 'all',
      page: '1',
    },
    news: [],
    readLaterNews: [],
    error: {
      message: '',
      status: '',
    },
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const currentParams = this.state.params;
    const prevParams = prevState.params;

    if (
      currentParams.searchingText !== prevParams.searchingText
      || currentParams.selectedSection !== prevParams.selectedSection
      || currentParams.page !== prevParams.page
    ) {
      this.fetchNewsMethod();
    }
  }

  componentDidMount() {
    this.fetchNewsMethod();
    this.fetchReadLaterNews();
  }

  // fetchind news data
  fetchNewsMethod = () => {
    const params = this.getQuesryParamsFromState();
    const paramsWithDate = {
      ...params,
      'from-date': getFromDate(),
    };

    SearchNews(paramsWithDate)
      .then(response => {
        this.mapNewsToState(response.results);
        this.deleteErrorMessage();
      })
      .catch(error => this.onSetErrorMessage(error.data.response));
  }

  // get read later news data from localStorage
  fetchReadLaterNews = () => {
    const readLaterNewsFromStorage = getAllReadLaterNews();

    this.setState({
      readLaterNews: readLaterNewsFromStorage,
    });
  }

  // parse QuesryParams to State
  getQuesryParamsFromState = () => {
    const params = this.state.params
    return {
      section: params.selectedSection,
      q: params.searchingText,
      page: params.page,
    };
  };

  // map news data to state
  mapNewsToState = (newNews: NewsType[]) => {
    this.setState({
      news: newNews,
    });
  }

  // update query params
  updateParams = (newPrams: object) => {
    const params = this.state.params;

    this.setState({
      params: {
        ...params,
        ...newPrams,
      },
    });
  }

  // set error to state
  onSetErrorMessage = (message: ErrorMessage) => {
    this.setState({
      error: {
        ...message,
      },
    });
  }

  // delete error
  deleteErrorMessage = () => {
    this.onSetErrorMessage({
      message: '',
      status: '',
    });
  }

  // change section param
  onChangeSection = (event: any) => {
    const target = event.target;
    const newSection = target.value;

    this.updateParams({
      selectedSection: newSection,
      page: '1',
    });
  }

  // change page param
  onChageCurrentPage = (event: any) => {
    const target = event.target;
    const newPage = target.value;

    this.updateParams({
      page: newPage,
    });
  }

  // change search input param
  onChangeSearchInput = (event: any) => {
    clearTimeout(this.searchInputTimeout);
    const target = event.target;
    const newSearchText = target.value;

    this.searchInputTimeout = setTimeout(
      () => {
        this.updateParams({
          searchingText: newSearchText,
        });
      },
      500,
    );
  }

  // add news item to localStorage
  onAddItemToReadLaterNews = (news: NewsType) => {
    addItemToStorage(news);
    this.fetchReadLaterNews();
  }

  // delete new item from localStorage
  onDeleteNewsFromReadLaterList = (itemId: string) => {
    removeItemFromStorage(itemId);
    this.fetchReadLaterNews();
  }

  render() {
    const {
      news,
      params,
      readLaterNews,
      error,
    } = this.state;

    return (
      <main className="wrapper">
        <ScreenHeader
          title="Recruitment task"
        />
        {/* <!-- Filters Section --> */}
        <FiltersSection
          selectedSection={params.selectedSection}
          selectedPage={params.page}
          onChageCurrentPage={this.onChageCurrentPage}
          onChangeSection={this.onChangeSection}
          onChangeSearchInput={this.onChangeSearchInput}
          errorMessage={error.message}
        />
        {/* <!-- ./Filters Section --> */}

        {/* <!-- News Section --> */}
        <NewsComponent
          news={news}
          readLaterNews={readLaterNews}
          onAddNewsToReadLaterList={this.onAddItemToReadLaterNews}
          onDeleteNewsFromReadLaterList={this.onDeleteNewsFromReadLaterList}
        />
        {/* <!-- ./News Section --> */}
      </main>
    )
  }
};

export default HomeScreenContainer;
