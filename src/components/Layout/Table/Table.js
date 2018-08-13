// @flow
/*
 * Table
 */

// Vendor
import classnames from 'classnames';
import React, { Component } from 'react';
import DropDown from '../../Icon/DropDown';
import { LoadingSpinner, LoadingStrip } from '../../Loading';
import style from './Table.scss';

function defaultSort(a, b) {
  const stringA = String(a).toLowerCase();
  const stringB = String(b).toLowerCase();

  if (stringA < stringB) {
    return -1;
  } else if (stringA > stringB) {
    return 1;
  }
  return 0;
}

type Width = 'extraNarrow' | 'narrow' | 'wide' | 'extraWide';

type Props = {
  columns: {
    title: string,
    width: Width,
    sortable: boolean,
    sortFunction: Function,
  }[],

  body: {
    inactive: boolean,
    content: any[],
  }[],
};

class Table extends Component<Props, *> {
  state = {
    sortAscending: true,
    sortColumn: null,
    sortedBody: this.props.body,
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      sortAscending: true,
      sortColumn: null,
      sortedBody: nextProps.body,
    });
  }

  sortBody = (columnIndex: number, sortFunction: Function) => {
    const { sortAscending, sortColumn, sortedBody } = this.state;
    const ascending = sortColumn === columnIndex ? !sortAscending : true;
    const body = sortedBody.sort(
      (a, b) =>
        ascending
          ? sortFunction(a.content[columnIndex], b.content[columnIndex])
          : sortFunction(b.content[columnIndex], a.content[columnIndex]),
    );

    this.setState({
      sortAscending: ascending,
      sortColumn: columnIndex,
      sortedBody: body,
    });
  };

  renderBody = () => {
    const { columns } = this.props;
    const { sortedBody } = this.state;

    if (columns && columns.length && sortedBody && sortedBody.length > 0) {
      return sortedBody.map((row, rowIndex) => (
        <div
          className={classnames(style.row, { [style.inactive]: row.inactive })}
          key={rowIndex} // eslint-disable-line react/no-array-index-key
        >
          {row.content.map((cell, cellIndex) => (
            <div
              className={classnames(style.cell, {
                [style[columns[cellIndex].width]]: columns[cellIndex].width,
              })}
              key={cellIndex} // eslint-disable-line react/no-array-index-key
            >
              {cell}
            </div>
          ))}
        </div>
      ));
    }
    return <LoadingSpinner className={style.bodyLoading} />;
  };

  renderHeaders = () => {
    const { sortBody } = this;
    const { columns } = this.props;
    const { sortAscending, sortColumn } = this.state;

    if (columns && columns.length > 0) {
      return (
        <React.Fragment>
          {columns.map((column, index) => (
            <div
              className={classnames(style.heading, {
                [style[column.width]]: column.width,
                [style.sortable]: column.sortable,
                [style.ascending]: sortColumn === index && sortAscending,
                [style.descending]: sortColumn === index && !sortAscending,
              })}
              onClick={() =>
                column.sortable &&
                sortBody(index, column.sortFunction || defaultSort)
              }
              key={column.title}
            >
              <span className={style.title}>{column.title}</span>
              {sortColumn === index && <DropDown className={style.caret} />}
            </div>
          ))}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {['narrow', 'wide', 'extraNarrow'].map(width => (
          <div
            key={width}
            className={classnames(style.heading, { [style[width]]: width })}
          >
            <LoadingStrip />
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    const { renderHeaders, renderBody } = this;

    return (
      <div className={style.table}>
        <div className={style.header}>{renderHeaders()}</div>
        <div className={style.body}>{renderBody()}</div>
      </div>
    );
  }
}

export default Table;
