export const SetlistfmAbout = ({ token }) => {
  return (
    <div className="about__container">
      <h1 className="about-title">Setlist.fm</h1>
      <div>
        <div>
          <p>
            All information about the concerts for a single band or artist comes from setlist.fm
            database. All information available on the{" "}
            {
              <a className="link__hover" href="https://www.setlist.fm" target="_blank">
                setlist.fm
              </a>
            }{" "}
            website. You need to apply for a setlist.fm API key to download data and use them. they
            are free for non-commercial projects.{" "}
            {
              <a
                className="link__hover"
                href="https://api.setlist.fm/docs/1.0/index.html"
                target="_blank"
              >
                You can get it
              </a>
            }
            . Please read the{" "}
            {
              <a className="link__hover" href="https://www.setlist.fm/help/terms" target="_blank">
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
