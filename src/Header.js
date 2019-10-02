import React from 'react';
import './Header.css';
import { Jumbotron} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
const Header=()=>{
  return(
    <div>
          <Container>
              <Row>
                  <Col>
                      <Jumbotron>
                          <h1>Hello, Friend!</h1>
                          <p>
                              Food is not rational. Food is culture, habit, craving and identity.

  </p>

                      </Jumbotron>
                  </Col>
                  <Col>
                      <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.973xw:0.647xh;0,0.224xh&resize=640:*" alt="Nature" />
                  </Col>
              </Row >
</Container>
 <Container>
                <Row>
                 
                    <Col className="left">
                        <img src="https://levelpreston.co.uk/wp-content/uploads/2017/10/foodLEVELS-10023-1000x800.jpg" alt="Nature" />
                    </Col>
                    <Col>
                        <Jumbotron className="right">
                            <h1>Welcome</h1>
                            <p>
                                The secret of success in life is to eat what you like and let the food fight it out inside.


  </p>

                        </Jumbotron>
                    </Col>
                </Row>

            </Container>
             <Container>
                <Row>
                    <Col>
                        <Jumbotron className="right">
                            <h1> To World Of Food</h1>
                            <p>
                                If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.
  </p>

                        </Jumbotron>
                    </Col>
                    <Col>
                        <img src="https://pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Thai-Recipe.jpg" alt="Nature" />
                    </Col>
                    
                </Row>

            </Container>

</div>
);
}
export default Header;
