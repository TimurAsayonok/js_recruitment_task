import * as React from 'react';
// components
import { InputForm } from '../forms/InputForm';
import { SelectForm } from '../forms/SelectForm';
import { EmptyListMessage } from '../common/ErrorMessage';
// constants
import {
  NewsTypesSelectFromItems,
  ActivePageSelectFormItems,
} from '../../constants/common';

interface Props {
  selectedSection: string
  selectedPage: string
  errorMessage: string
  onChangeSearchInput: (event: any) => void
  onChangeSection: (event: any) => void
  onChageCurrentPage: (event: any) => void
};

export const FiltersSection = ({
  selectedSection,
  selectedPage,
  onChangeSearchInput,
  onChangeSection,
  onChageCurrentPage,
  errorMessage
}: Props) => (
  <section className="container filtersContainer">
    <div className="row">
      <div className="column searchColumn">
        <InputForm
          id="newsContentSearch"
          htmlFor="newsContentSearch"
          label="News content search"
          placeholder="News content search"
          type="search"
          onChange={onChangeSearchInput}
        />
      </div>
      <div className="column">
        <SelectForm
          id="sectionSelect"
          label="Section"
          htmlFor="sectionSelect"
          items={NewsTypesSelectFromItems}
          selectedValue={selectedSection}
          onSelectItem={onChangeSection}
        />
      </div>
    </div>
    <div className="row">
      <div className="column column-20">
        <SelectForm
          id="activePageSelect"
          label="Active Page"
          htmlFor="activePageSelect"
          items={ActivePageSelectFormItems}
          selectedValue={selectedPage}
          onSelectItem={onChageCurrentPage}
        />
      </div>
    </div>
    {errorMessage && (
      <EmptyListMessage
        message={errorMessage}
      />
    )}
  </section>
);
