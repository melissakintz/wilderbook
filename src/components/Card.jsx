
import avatar from "../assets/avatar.png";
import Proptypes from "prop-types";

function Card(props) {
    const wilder = props.wilder;
    return(
        <div className="card-container">
            <div className="avatar">
                <img src={avatar} alt="avatar" width="100"/>
            </div>
            <h1 className="name">{wilder.name}</h1>

            <div className="description">
                <p>{wilder.description}</p>
            </div>
            <div className="skills">
                <p className="title">Wild skills :</p>
                <div className="skills-container">
                    {wilder.skills.map((skill) => 
                        <div className="skill">
                            <div className="skill-name">
                                <p>{skill.name}</p>
                            </div>
                            <div className={skill.votes >= 9 ? "skill-votes upper" : "skill-votes lower"}>
                                <p>{skill.votes}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Card.Proptype = {
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    skills: Proptypes.array.isRequired,
}

export default Card;