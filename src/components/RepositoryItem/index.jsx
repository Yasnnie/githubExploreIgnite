export default function RepositoryItem(props){
    return(
    <li>
        <strong>{props.repository?.name ?? "Title"}</strong>
        <p>{props.repository?.description ?? "Descripition"}</p>

        <a href={props.repository?.link ?? "https://google.com"}>
            Acessar repositório
        </a>
    </li>
    )
}