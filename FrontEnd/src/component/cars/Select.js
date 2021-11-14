import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';

export default function Select() {
    const { id }= useParams()
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>{id}</h1>

        </div>
    )
}
