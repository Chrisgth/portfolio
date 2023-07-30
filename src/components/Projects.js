import caltrack from "../images/caltrack.jpg";
import inventory from "../images/inventory.jpg";
import shopcart from "../images/shopcart.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects that I've made</h2>
      <div className="project">
        <div className="image">
          <img src={caltrack} alt="" />
        </div>
        <div className="content">
          <p>Nutrition App (MERN)</p>
          <div className="linkbuttons">
            <button
              onClick={() =>
                window.open("https://chrisgth.github.io/calorie-tracker")
              }
            >
              Live
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/Chrisgth/calorie-tracker")
              }
            >
              Code
            </button>
          </div>
          <p>
            A full stack nutrition tracking application built using the MERN
            stack.
          </p>
          <p>
            This app utilizes a public API to fetch food items, their
            measurements, calories and macronutrients from a database using
            axios. The data is then interpreted and displayed to the user in the
            frontend. The app has a login and register system with password
            encryption achieved using Bcryptjs and JWT. Users can also create,
            read, update and delete meal plans which can store individual food
            items along with their measurements. Viewing the plan the user can
            track the cumulative amount of calories and macronutrients.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="image">
          <img src={shopcart} alt="" />
        </div>
        <div className="content">
          <p>Shopping Cart (React)</p>
          <div className="linkbuttons">
            <button
              onClick={() =>
                window.open("https://chrisgth.github.io/shopping-cart/")
              }
            >
              Live
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/Chrisgth/shopping-cart")
              }
            >
              Code
            </button>
          </div>
          <p>A front-end shopping cart application built using React</p>
          <p>
            A responsive shopping cart where users can browse a paginated
            catalogue containing items in the form of cars. The data is fetched
            from a simple JSON file created and hosted on github pages by
            myself. Users can click on an individual item to see additional
            details and add the item into their cart alongside with a specific
            quantity. The cart page shows all of the previously added items
            alongside a grand total, this data is stored in browser local
            storage every time a change takes place.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="image">
          <img src={inventory} alt="" />
        </div>
        <div className="content">
          <p>Inventory (Node, Express, MongoDB)</p>
          <div className="linkbuttons">
            <button
              onClick={() =>
                window.open("https://chrisgth-inventory-application.fly.dev/")
              }
            >
              Live
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/Chrisgth/inventory-application")
              }
            >
              Code
            </button>
          </div>
          <p>
            A back-end inventory application built using Node, Express and
            MongoDB
          </p>
          <p>
            This inventory utilizes the aforementioned technologies to create a
            paginated list and view of items stored in a MongoDB cluster with
            help from the EJS view engine. The database can be interacted with
            basic CRUD operations and any changes will be reflected in the
            browser.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
