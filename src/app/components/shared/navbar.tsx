import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div>
        <h1>Rocket League Championship Series Stats</h1>
        <form>
          <input
            type="text"
            name="search_query"
            id="search_bar"
            className="input"
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>

        <p className="help">This is a help text</p>
      </div>
      <div>
        <button>
          Players <i className="fa-solid fa-angle-down"></i>
        </button>
        <button>
          Teams <i className="fa-solid fa-angle-down"></i>
        </button>
        <button>
          Tournaments <i className="fa-solid fa-angle-down"></i>
        </button>
        <button>
          Seasons <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </div>
  );
}
