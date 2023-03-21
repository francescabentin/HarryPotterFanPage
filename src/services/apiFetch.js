const getDataApi = () => {
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then((response) => response.json())
        .then((data) => {
            const cleanData =
                data.map((eachObject) => {
                    return {
                        name: eachObject.name,
                        house: eachObject.house,
                        species: eachObject.species,
                        image: eachObject.image || "https://ik.imagekit.io/hpapi/hermione.jpeg"
                    }
                })
            return cleanData;
        });
};
export default getDataApi;