import * as React from 'react';
// components
import { NewsListComponent } from './NewsList.component';
import { ReadLaterNewsListComponent } from './ReadLaterNewsList.component';
// interfaces
import { NewsType } from '../../interfaces/news';

interface Props {
  news: NewsType[]
  readLaterNews: NewsType[]
  onAddNewsToReadLaterList: (item: NewsType) => void
  onDeleteNewsFromReadLaterList: (itemId: string) => void
};

export const NewsComponent = ({
  news,
  readLaterNews,
  onAddNewsToReadLaterList,
  onDeleteNewsFromReadLaterList
}: Props) => (
  <section className="container newsContainer">
    <div className="row">
      <NewsListComponent
        news={news}
        onReadLaterNews={onAddNewsToReadLaterList}
      />
      <ReadLaterNewsListComponent
        readLaterList={readLaterNews}
        onDeleteNewsById={onDeleteNewsFromReadLaterList}
      />
    </div>
  </section>
);
