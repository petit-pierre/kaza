//import { redirect } from "react-router-dom";
import Slider from "../../components/Slider";
import "../../style/style.css";
import "../../style/Housing.css";
import Collapse from "../../components/Collapse";
import { useParams } from "react-router-dom";
let Logements = require(`../../data/logements.json`);

function Housing() {
  const { houseNumber } = useParams();
  const house = Logements.find((Logements) => Logements.id === houseNumber);
  return (
    <div>
      <div className="slider">
        <div className="slider">{Slider(house)}</div>
      </div>

      <section className="housing">
        <div className="leftSide">
          <p className="titleHousing">{house.title}</p>
          <p className="locationHousing">{house.location}</p>
          <div className="tags">
            {house.tags.map((tag) => (
              <p key={tag} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="rightSide">
          <div className="host">
            <img src={house.host.picture} className="hostPicture" alt="hote" />
            <p className="hostName">{house.host.name}</p>
          </div>
        </div>
      </section>
      <section className="collapseSection">
        <div className="collapseDescription">
          {Collapse("Description", house.description)}
        </div>
        <div className="collapse">
          {Collapse(
            "Équipements",
            house.equipments.map((equip) => (
              <span key={equip}>
                {equip}
                <br></br>
              </span>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Housing;
