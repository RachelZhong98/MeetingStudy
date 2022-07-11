import React from "react";

const PageTitle = ({ title, children }) => {
  return title || children ? (
    <header className="bg-light py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-black mt-5 mb-2">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  ) : null;
};

export default PageTitle;
