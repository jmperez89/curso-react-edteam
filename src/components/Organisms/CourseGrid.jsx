import React from "react"
import CourseCard from "../Molecules/CourseCard"

const cursos = [
    {
        "id": 1,
        "titulo": "React Desde Cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
        "price": 10,
        "profesor": "Beto Quiroga 1"
    },
    {
        "id": 2,
        "titulo": "MySQL",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/4c21cab6-2482-4a0d-8364-d3852a854fe3.png",
        "price": 20,
        "profesor": "Beto Quiroga 2"
    },
    {
        "id": 3,
        "titulo": "Trabajo Remoto",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/8ab1c233-9f8d-4f75-b0a8-5bd57a528aa0.png",
        "price": 30,
        "profesor": "Beto Quiroga 3"
    },
    {
        "id": 4,
        "titulo": "Angular",
        "image": "https://edteam-media.s3.amazonaws.com/specialities/original/af23506e-24c8-4633-b813-869e07c108ad.png",
        "price": 40,
        "profesor": "Beto Quiroga 4"
    },
    {
        "id": 5,
        "titulo": "Server Side NEXT",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/6ebe865e-e7cd-44bd-94a6-f86630314d53.png",
        "price": 50,
        "profesor": "Beto Quiroga 5"
    },
    {
        "id": 6,
        "titulo": "GO Desde Cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
        "price": 60,
        "profesor": "Beto Quiroga 6"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-3">
        { cursos.map(c => (
        <CourseCard
            key={c.id}
            id={c.id}
            title={c.titulo}
            image={c.image}
            price={c.price}
            profesor={c.profesor}

        />
        )) }
    </div>
)

export default CourseGrid