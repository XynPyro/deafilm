import { Container, Row, Col } from "react-bootstrap";

import duneImage from "../assets/images/trending/dune.jpg";
import avatarImage from "../assets/images/trending/avatar.jpg";
import pikachuImage from "../assets/images/trending/pikachu.jpg";
import starwarsImage from "../assets/images/trending/starwars.jpg";
import thorImage from "../assets/images/trending/thor.jpg";
import venomImage from "../assets/images/trending/venom.jpg";

const Trending = () => {
  return (
    <Container>
      <Row>
        <p className="title mt-3 text-center pe-none">TRENDING FILMS</p>
        <Col md={4} className="movieWrapper mt-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={duneImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">Dune 2021</h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="movieWrapper mt-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={avatarImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">Avatar</h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="movieWrapper mt-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={pikachuImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">
                  Pokémon Detective Pikachu
                </h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="movieWrapper mt-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={starwarsImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">
                  Star Wars Jedi: Fallen Order
                </h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="movieWrapper mt-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={thorImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">Thor</h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="movieWrapper mt-5 mb-5">
          <div className="card bg-transparent movieImage">
            <img class="card-img" src={venomImage} alt="Dune 2021" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white pe-none">
                <h5 class="card-title text-center">Venom</h5>
                <p class="card-text text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text text-left">Last updated 4 mins ago</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
