import * as React from 'react';

interface Props {
  message: string
};
export const EmptyListMessage = ({
  message
}: Props) => (
  <div>
    <h4 className="error-message">{message}</h4>
  </div>
);
