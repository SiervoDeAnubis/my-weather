import React, { Component } from "react";
import pet from "@frontendmasters/pet";

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(e => this.setState({ err: e }));
  }

  render() {
    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      loading
    } = this.state;
    if (loading) {
      return <h1> loading ... </h1>;
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button> Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
