import { useParams } from "react-router-dom"

export default function Profile(){

    const {slug} = useParams()
    return(
        <div>
            profil page!-{slug}
        </div>
    )
}