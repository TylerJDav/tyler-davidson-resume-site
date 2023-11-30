import JobHeaderCol from "./JobHeaderCol";

function JobHeaderRow({ columns, thClasses, sortCol, sortDir }) {
  const listItems = columns.map((col) => (
    <JobHeaderCol
      key={col.name}
      label={col.label}
      thClasses={thClasses}
      colName={col.name}
      sortCol={sortCol}
      sortDir={sortDir}
    />
  ));
  return <tr>{listItems}</tr>;
}
export default JobHeaderRow;
