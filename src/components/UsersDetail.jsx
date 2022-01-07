import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"

export const UsersDetail = () =>{
    const {userid }= useParams();
    const [user, setUser] = useState({})
   useEffect(() => {
       fetch(`https://reqres.in/api/users/${userid}`).then((d )=> d.json()
        ).then((d) => setUser(d.data))
   }, [userid])
    console.log(user,"jh")
//     }
    return <div>
       <img src={user.avatar} alt="text" />
       {user.first_name} {user.last_name}
    </div>
}

//https://reqres.in//api/users/2

