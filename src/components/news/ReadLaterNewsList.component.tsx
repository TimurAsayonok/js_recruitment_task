import * as React from 'react';
// components
import { EmptyListMessage } from '../common/EmptyListMessage';
import { NewsColumnTitle } from './components/NewsColumnTitle';
import { NewsItemTitleSmall } from './components/NewsItemTitle';
import {
  Button,
  LinkAsAButton,
} from '../common/Buttons';
// interfaces
import { NewsType } from '../../interfaces/news';

interface Props {
  readLaterList: NewsType[]
  onDeleteNewsById: (itemId: string) => void
}

export const ReadLaterNewsListComponent = ({
  readLaterList,
  onDeleteNewsById,
}: Props) => (
  <div className="column column-55">
    <NewsColumnTitle
      title="Read Later"
    />

    {readLaterList.length > 0 ? (
      <ul className="readLaterList">
        {readLaterList.map(item => (
          <li key={item.id}>
            <NewsItemTitleSmall
              title={item.webTitle}
            />
            <section>
              <LinkAsAButton
                href={item.webUrl}
                className="button-clear"
                title="Read"
              />
              <Button
                className="button-clear"
                onClick={() => onDeleteNewsById(item.id)}
                title="Remove"
              />
            </section>
          </li>
        ))}
      </ul>
    ) : (
        <EmptyListMessage />
      )}
  </div>
);
