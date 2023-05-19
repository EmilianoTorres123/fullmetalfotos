import React, { Component} from "react";
import FullmetalDataService from "../services/fullmetal.service";
import "../styles/Mostrar.css";
import LikeButton from "./Like";



import Fullmetal from "./fullmetal.components";

export default class FullmetalList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = FullmetalDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        url: data.url,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() { 
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <span class="Mostrar_Titulo">Fotos full metal guardadas: </span>

          {tutorials &&
            tutorials.map((Tutorials, index) => {
              return (
                <div class="card card3" >
                  <div className="inner">
                    <button
                      className={+(index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveTutorial(Tutorials, index)}
                      key={index}
                    >
                      {Tutorials.title}
                    </button>
                  </div>
                </div>
              );
            })}

          <LikeButton/>
          <ul className="list-group"></ul>
        </div>

        <div className="col-md-6">
          {currentTutorial ? (
            <Fullmetal
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a fullmetal...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}