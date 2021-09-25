import axios from "axios";
import { useState } from "react"
import { ReactComponent as loadingImg } from "../assets/loading.svg";

export default function AddWilder(){
    const [wilder, setWilder] = useState({
        "name": "",
        "description": "",
    });

    const [loading, setLoading] = useState(false);
    const [delay, setDelay] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setLoading(true);
            setDelay(true);
            setTimeout(() => setDelay(false), 1000);
            const results = await axios.post("http://localhost:5000/api/wilder/create",
            {
                "name": wilder.name,
                "description": wilder.description,
                "skills": [
                        {
                        "name": "HTML",
                        "votes": 0
                        },
                        {
                        "name": "CSS",
                        "votes": 0
                        },
                        
                ]

            })
        } catch (err){
            if(error.response){
                setError(err.response.data.message);
            }else {
                setError(err.message);
            }
        } finally{
            setLoading(false);
        }
    };

    return(
        <form
            onSubmit={(e) => {handleSubmit(e)}}
        >
            <label htmlFor='name-input'>Name : </label>
            <input
                id="name-input"
                type="text"
                placeholder="Type the Name"
                value={wilder.name}
                onChange={(e) => setWilder({...wilder, 
                    "name": e.target.value })}
            />
            <label htmlFor='description-input'>Description : </label>
            <textarea
                id="name-input"
                type="text"
                placeholder="Type the description"
                value={wilder.description}
                onChange={(e) => setWilder({...wilder, 
                    "description": e.target.value })}
            />
{/*
            <label htmlFor='skill-input'>Choose skills : </label>

            <input type="checkbox" name="HTML" value="HTML" onClick={(e) => handleSkills(e)}/>
            <label htmlFor="HTML">HTML</label>

            <input type="checkbox" name="NodeJS" value="NodeJS" id="NodeJS" onClick={(e) => handleSkills(e)}/>
            <label htmlFor="NodeJS">NodeJS</label>

            <input type="checkbox" name="CSS" value="CSS" id="CSS"/>
            <label htmlFor="CSS">CSS</label>

            <input type="checkbox" name="JavaScript" value="JavaScript" id="JavaScript" onClick={(e) => handleSkills(e)}/>
            <label htmlFor="JavaScript">JavaScript</label>

            <input type="checkbox" name="NextJS" value="NextJS" id="NextJS" onClick={(e) => handleSkills(e)}/>
            <label htmlFor="NextJS">NextJS</label>
*/}

            {error !== "" && <error>{error}</error>}
            
            <button disabled={loading} showLoading={loading && !delay}>
            {loading ?  <loadingImg />: 'Ajouter' }
            </button>
        </form>
    )
}