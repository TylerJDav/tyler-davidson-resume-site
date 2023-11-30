import JobsListView from "./JobsListView";

function WorkExperience({ viewModel, api }) {
  return (
    <main className="container">
      <h1 className="text-4xl text-center">Work Experience</h1>
      <br />
      <JobsListView viewModel={viewModel} api={api}></JobsListView>
    </main>
  );
}

export default WorkExperience;
