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
                        image: eachObject.image || `https://via.placeholder.com/210x295/191825/ffffff/?text=${eachObject.name}`,
                        id: eachObject.id
                    }
                })
            return cleanData;
        });
};
export default getDataApi;