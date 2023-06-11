function Home({ cart }) {
  return (
    <>
      <h1 className="welcome">Welcome to Squares R Us</h1>
      <h4 className="slogan">We serve all your square needs</h4>
      <p className="note">
        Now hiring: We are in desperate need of web designers. For more
        information check our{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        >
          careers page.
        </a>
      </p>
    </>
  );
}

export default Home;
