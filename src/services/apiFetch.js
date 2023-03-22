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
                        image: eachObject.image || "https://ik.imagekit.io/hpapi/hermione.jpeg",
                        id: eachObject.id
                    }
                })
            return cleanData;
        });
};
export default getDataApi;