import { useRef } from "react";

import { Form } from "react-bootstrap";

const HomePage = () => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
  };

  return (
    <div className="container">
      <h1>Player Search</h1>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Enter your gamertag e.g. CallMeMerc, WillKillForTacos"
          ref={searchInput}
        />
      </Form>
    </div>
  );
};

export default HomePage;
