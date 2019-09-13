import * as React from 'react';
// helpers
import { parseData } from '../../../utils/common';

interface Props {
  section: string
  publicationDate: sting
};

export const NewsItemInfo = ({
  section,
  publicationDate,
}: Props) => (
  <section className="newsDetails">
    <ul>
      <li><strong>Section Name:</strong> {section}</li>
      <li><strong>Publication Date:</strong> {parseData(publicationDate)}</li>
    </ul>
  </section>
);
