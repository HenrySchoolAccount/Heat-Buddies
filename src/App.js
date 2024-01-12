import foreground from "./Images/foreground.png";
import background from "./Images/background.png";
import umbrella0 from "./Images/istockphoto-1034398178-640x640.jpg";
import umbrella1 from "./Images/istockphoto-1143045785-612x612.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div class="website">
      <Parallax pages={4}>
        {/*Background*/}

        <ParallaxLayer
          speed={0.25}
          factor={5}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: `cover`,
          }}
        />

        <ParallaxLayer speed={0.75}>
          <h1
            class="Title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            The future of Umbrellas.
          </h1>
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={0.25}>
          <div class="warning">
            <p style={{ display: "flex", justifyContent: "center" }}>
              ⓘ Please note that this project is not real.
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              Do not try to contact me about this.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer class="image" speed={0.1} offset={0.3}>
          <img src={umbrella0}></img>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={1}>
          <div>
            <h1>Who We Are</h1>
          </div>
          <div class="Who">
            <small>ⓘ please remember that this is fictional</small>
            <p style={{ display: "flex", justifyContent: "right" }}>
              One day, our founder,&nbsp;
              <a
                style={{ display: "flex", justifyContent: "right" }}
                href="https://duckduckgo.com/?q=random+name"
              >
                Richie Bolling
              </a>
              , was&nbsp;&nbsp;&nbsp;{" "}
            </p>
            <p style={{ display: "flex", justifyContent: "right" }}>
              walking home when he realized that umbrellas suck.
              For&nbsp;&nbsp;&nbsp;
            </p>
            <p style={{ display: "flex", justifyContent: "right" }}>
              many years, they have been the exact same, with the same
              problems.&nbsp;&nbsp;&nbsp;
            </p>
            <p style={{ display: "flex", justifyContent: "right" }}>
              Richie put together a team to fix them.&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={0.2}
          style={{
            backgroundImage: `url(${umbrella1})`,
            backgroundSize: `50%`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={2}>
          <h1 style={{ display: "flex", justifyContent: "right" }}>
            How are we different?&nbsp;
          </h1>
          <small style={{ display: "flex", justifyContent: "right" }}>
            ⓘ this product is still
            fake&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </small>
          <p style={{ display: "flex", justifyContent: "left" }}>
            <strike>Parallax</strike>
          </p>

          <p>
            Our product, Heat Buddies™, was designed with the 21
            <sup>st</sup> century in mind.
          </p>
          <p>
            The handle contains a heater to keep your hand warm while holding,
          </p>
          <p>hense the name. Other features include:</p>
          <ol>
            <li>LCD screen showing predicted weather</li>
            <li>Thunderbolt charging+data transfer port</li>
            <li>Companion app you can connect to with bluetooth</li>
            <li>4 customizable buttons</li>
            <li>Motor for automatically opening and shaking off umbrella</li>
            <li>Raspberry Pi Zero inside</li>
            <li>Compatible with Ultimate Doom (game purchase required)</li>
          </ol>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${foreground})`,
            backgroundSize: `cover`,
          }}
        />

        <ParallaxLayer speed={0.3} offset={3}>
          <h1>Open Source</h1>
          <p style={{ display: "flex", justifyContent: "right" }}>
            All of the code to this project can be found for free online, and
            you can code your own application for your
            umbrella&nbsp;&nbsp;&nbsp;
          </p>
          <p style={{ display: "flex", justifyContent: "right" }}>
            yourself. Feel free to fix bugs and add new features on our Github
            page! (Again this product does not exist)&nbsp;&nbsp;&nbsp;
          </p>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Egg McMuffin
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

export default App;
