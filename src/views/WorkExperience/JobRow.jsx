import JobCol from "./JobCol";

function JobRow({ job, id, columns }) {
  let inc = 1;
  const listItems = columns.map((col) => (
    <JobCol key={inc++} data={job[col.name]}></JobCol>
  ));

  return <tr key={id}>{listItems}</tr>;
}

export default JobRow;
