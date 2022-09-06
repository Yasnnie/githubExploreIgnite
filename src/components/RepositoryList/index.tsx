import { useEffect, useState } from "react"
import RepositoryItem from "../RepositoryItem"
import './styles.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export default function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])
    //https://api.github.com/users/yasnnie/repos

    useEffect(()=>{
        fetch('https://api.github.com/users/yasnnie/repos')
        .then((response)=>response.json())
        .then((data)=>setRepositories(data))
    },[])
   
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map((item, index) => <RepositoryItem repository={item} key={index} /> )}
            </ul>
        </section>
    )
}