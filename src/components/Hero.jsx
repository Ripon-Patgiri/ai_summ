import logo from "../Assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="ai_summ_logo" className="w-12 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/Ripon-Patgiri/ai_summ");
          }}
          className="black_btn"
        >
          github
        </button>
      </nav>
      <h1 className="head_text">
        <span className="orange_gradient">ai_summariser</span>{" "}
        <br className="max-md:hidden" />
        AI-powered article summarizer <br className="max-md:hidden" />
      </h1>
      <h2 className="desc">
        Helps you save time and gather information faster. With{" "}
        <span className="orange_gradient">ai_summariser</span>, you can quickly
        summarize any article and get the key points in seconds. No more sifting
        through long articles to find the information you need.{" "}
        <span className="orange_gradient">ai_summariser</span> does the work for
        you.
      </h2>
    </header>
  );
};
export default Hero;
