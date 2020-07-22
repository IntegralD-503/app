import React from "react";
import axios from "axios";

import Nav from "./Nav.jsx";
import Service from "./Service.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import API_KEY from "../../../config";
const navItems = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: navItems,
      query: "",
      videos: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //call API to get data using Axios and update state
    this.setState({ items: navItems });
  }

  handleSubmit(query) {
    //call YouTubeAPI and setState
    const maxResults = 10;
    const { key } = API_KEY;
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&order=viewCount&maxResults=${maxResults}&q=${query}&type=video`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          query,
          videos: data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { videos, items } = this.state;
    console.log(videos);
    return (
      <div className="main">
        <Nav items={items} />
        <div>
          <h1>Ready for more motivational videos?</h1>
          <VideoPlayer submit={this.handleSubmit} videos={videos} />
          <Service />
        </div>
      </div>
    );
  }
}

export default App;
