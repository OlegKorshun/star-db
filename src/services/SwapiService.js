export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  };

  getAllPeople = async () => {
    const people = await this.getResource('/people/');
    return people.results.map((people) => this._transormPerson(people));
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transormPerson(person);
  };

  getAllStarships = async () => {
    const starships = await this.getResource('/starships/');
    return starships.results.map((starship) => this._transformStarship(starship));
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets/');
    return planets.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  getPersonImageUrl = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImageUrl = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImageUrl = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      orbitalPeriod: planet.orbital_period,
      gravity: planet.gravity,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water,
      created: planet.created,
      edited: planet.edited
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      starshipClass: starship.starship_class,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      maxAtmospheringSpeed: starship.max_atmosphering_speed,
      hyperdriveRating: starship.hyperdrive_rating,
      mglt: starship.MGLT,
      cargoCapacity: starship.cargo_capacity,
      consumables: starship.consumables,
      created: starship.created,
      edited: starship.edited
    };
  };

  _transormPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      skinColor: person.skin_color,
      homeworld: person.homeworld,
      created: person.created,
      edited: person.edited
    };
  };
};