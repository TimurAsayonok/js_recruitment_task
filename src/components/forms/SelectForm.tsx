import * as React from 'react';
import { SelectFormItemType } from '../../interfaces/forms';

interface Props {
  id: string
  items: SelectFormItemType[]
  label: string
  selectedValue: string
  htmlFor: string
  onSelectItem: (event: object) => void
}

export const SelectForm = ({
  id,
  label,
  items,
  selectedValue,
  htmlFor,
  onSelectItem,
}: Props) => (
  <div className="selectForm">
    <label
      htmlFor={htmlFor}
    >
      {label}
    </label>
    <select
      id={id}
      value={selectedValue}
      onChange={onSelectItem}
    >
      {items.map((item, index) => (
        <option
          key={index}
          value={item.value}
        >
          {item.title}
        </option>
      ))}
    </select>
  </div>
);
