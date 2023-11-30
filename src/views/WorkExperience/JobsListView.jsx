import { useEffect, useState } from "react";
import JobsTable from "./JobsTable";

function TeamListView({ viewModel, api }) {
  const [data, updateData] = useState(null);
  const [filterStr, setFilterStr] = useState(api.filterStr);
  const [sortCol, setSortCol] = useState(api.sortCol);
  const [sortDir, setSortDir] = useState(api.sortDir);

  useEffect(() => {
    console.log("useEffect-fetchData");
    api.sortCol = sortCol;
    api.sortDir = sortDir;
    api.filterStr = filterStr;

    api.list().then((teams) => {
      updateData(teams);
    });
  }, [api]);

  return (
    data && (
      <div className="col-sm-8">
        <div className="shadow-lg rounded-3 p-3 bg-black bg-opacity-75 bg-gradient">
          <main>
            <div className="row">
              <div className="col-12">
                <JobsTable
                  jobs={data}
                  sortCol={api.sortCol}
                  sortDir={api.sortDir}
                  viewModel={viewModel}
                ></JobsTable>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
}

export default TeamListView;
