export const SetlistfmAbout = ({ token }) => {
  return (
    <div className="px-2 py-2 my-2 text-center">
      <h1 className="display-5 fw-bold">Setlist.fm</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <p>
            All information about the concerts for a single band or artist comes
            from setlist.fm database. All information available on the{" "}
            {
              <a href="https://www.setlist.fm" target="_blank">
                setlist.fm
              </a>
            }{" "}
            website. You need to apply for a setlist.fm API key to download data
            and use them. they are free for non-commercial projects.{" "}
            {
              <a
                href="https://api.setlist.fm/docs/1.0/index.html"
                target="_blank"
              >
                You can get it
              </a>
            }
            . Please read the{" "}
            {
              <a href="https://www.setlist.fm/help/terms" target="_blank">
                API Terms of Use carefully
              </a>
            }
            .
          </p>
        </div>
      </div>
    </div>
  );
};
