import JobHeaderRow from "./JobHeaderRow";
import JobRow from "./JobRow";

function JobsTable({ jobs, viewModel, sortCol, sortDir }) {
  console.log(jobs);
  const listItems = jobs.map((job) => (
    <JobRow
      key={job.id}
      columns={viewModel.list.columns}
      job={job}
      id={job.id}
    />
  ));

  return (
    <table className={viewModel.list.tableClasses}>
      <thead>
        <JobHeaderRow
          columns={viewModel.list.columns}
          thClasses={viewModel.list.thClasses}
          sortCol={sortCol}
          sortDir={sortDir}
        />
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
}
export default JobsTable;
