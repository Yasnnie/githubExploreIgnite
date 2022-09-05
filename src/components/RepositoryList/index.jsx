import RepositoryItem from "../RepositoryItem"
import './styles.scss'

export default function RepositoryList(){
    const repository = {
        name: "oi",
        description: "Forms in React",
        link: 'https://github.com/unform/unform'
    }
   
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}