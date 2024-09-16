//commented the below image because header is now moved to a seperate component file under components
// import img from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
// import jsxImg from "./assets/jsx-ui.png";
// import stateImg from "./assets/state-mgmt.png";

// alternative syntax for using props
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentImg}
            ></CoreConcepts>
            {/* alternative syntax for using props */}
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            ></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
