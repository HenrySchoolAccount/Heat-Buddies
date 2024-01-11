import foreground from "./Images/foreground.png"
import background from "./Images/background.png";
import umbrella0 from "./Images/istockphoto-1034398178-640x640.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div class="website">
      <Parallax pages={3}>
        {/*Background*/}
        
        <ParallaxLayer
          speed={0.25}
          factor={4}
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
          <div className="Title" style={{display: "flex",justifyContent: "center",}}>
            <h1>Who We Are</h1>
          </div>
          <div class="Who">
          <small style={{display: "flex",justifyContent: "center", fontSize: "2"}}>ⓘ please remember that this is fictional</small>
          <p style={{display: "flex",justifyContent: "center",}}>One day, our founder,&nbsp;<a style={{display: "flex",justifyContent: "center",}} href="https://duckduckgo.com/?q=random+name">Richie Bolling</a>, was </p><p style={{display: "flex",justifyContent: "center",}}>walking home when he realized that umbrellas suck. For</p><p style={{display: "flex",justifyContent: "center",}}>many years, they have the exact same, with the same problems.</p><p style={{display: "flex",justifyContent: "center",}}>Richie put together a team to fix them.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={2}>
          <h1 style={{display: "flex",justifyContent: "center",}}>How are we different?</h1>
          <p style={{display: "flex",justifyContent: "center",}}><strike>Parallax</strike></p>
          <small style={{display: "flex",justifyContent: "center",}}>ⓘ this product is still fake</small>

          <p style={{display: "flex",justifyContent: "center",}}>Our product, Heat Buddies™, was designed with the 21<sup style={{display: "flex",justifyContent: "center",}}>st</sup> century in mind.</p><p style={{display: "flex",justifyContent: "center",}}>The handle contains a heater to keep your hand warm while holding,</p><p style={{display: "flex",justifyContent: "center",}}>hense the name. Other features include:</p>
          <ol>
            <li style={{display: "flex",justifyContent: "center",}}>LCD screen showing predicted weather</li>
            <li style={{display: "flex",justifyContent: "center",}}>Thunderbolt charging+data transfer port</li>
            <li style={{display: "flex",justifyContent: "center",}}>Companion app you can connect to with bluetooth</li>
            <li style={{display: "flex",justifyContent: "center",}}>4 customizable buttons</li>
            <li style={{display: "flex",justifyContent: "center",}}>Motor for automatically opening and shaking off umbrella</li>
            <li style={{display: "flex",justifyContent: "center",}}>Raspberry Pi Zero inside</li>
            <li style={{display: "flex",justifyContent: "center",}}>Compatible with Ultimate Doom (game purchase required)</li>
          </ol>
      
          <h1 style={{display: "flex",justifyContent: "center",}}>Egg McMuffin</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${foreground})`,
            backgroundSize: `cover`,
          }}
        />
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
