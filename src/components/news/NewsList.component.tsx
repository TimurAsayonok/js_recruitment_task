import * as React from 'react';
// components
import { EmptyListMessage } from '../common/EmptyListMessage';
import { NewsColumnTitle } from './components/NewsColumnTitle';
import { NewsItemTitleBig } from './components/NewsItemTitle';
import { NewsItemInfo } from './components/NewsItemInfo';
import {
  Button,
  LinkAsAButton,
} from '../common/Buttons';
// interfaces
import { NewsType } from '../../interfaces/news';

interface Props {
  news: NewsType[]
  onReadLaterNews: (item: NewsType) => void
}

export const NewsListComponent = ({
  news,
  onReadLaterNews,
}: Props) => (
  <div className="column column-65">
    <NewsColumnTitle
      title="News List"
    />
    {news.length > 0 ? (
      <ul className="newsList">
        {news.map(item => (
          <li key={item.id}>
            <article className="news">
              <NewsItemTitleBig
                title={item.webTitle}
              />
              <NewsItemInfo
                section={item.sectionName}
                publicationDate={item.webPublicationDate}
              />
              <section className="newsActions">
                <LinkAsAButton
                  href={item.webUrl}
                  title="Full article"
                />
                <Button
                  className="button-outline"
                  onClick={() => onReadLaterNews(item)}
                  title="Read Later"
                />
              </section>
            </article>
          </li>
        ))}
      </ul>
    ) : (
      <EmptyListMessage />
    )}
  </div>
);
