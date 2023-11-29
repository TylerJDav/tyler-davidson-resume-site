import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            You look lost. Are you lost? Let's get you back.
          </p>
          <Link to="/" className="btn btn-primary">
            Take Me Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
