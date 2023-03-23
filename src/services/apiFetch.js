import avatar from '../images/avatar.jpg';

const getDataApi = (house) => {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData =
                data.map((eachObject) => {
                    return {
                        name: eachObject.name,
                        house: eachObject.house,
                        species: eachObject.species,
                        image: eachObject.image || avatar,
                        id: eachObject.id,
                        gender: eachObject.gender
                    }
                })  
            return cleanData;
        });
};
export default getDataApi;