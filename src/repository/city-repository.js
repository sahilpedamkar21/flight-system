const {City} = require('../models/index');

class CityRepository{
    // creating city database
    async createCity({name}){   //{name} helps in direct access rather than obj.name
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("Something wrong in createcity function")
            throw {error};
        }
    }

 // delete a particular city from database
    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id : cityId
                }
            });
        } catch(error){
            console.log("something wrong in deletecity")
            throw {error};

        }
    }


    async updateCity(cityId, data){  // data = { name:"Prayagraj", airport:"bihari airport", state: "up"}
        try{
            const city = await City.update(data, {
                where:{
                    id : cityId
                }
            });
            return city;

        } catch(error){
            console.log("something wrong error in updatecity")
            throw {error};
        }

    }


    async getCity(cityId) {
        try {
            const city = await City.findOne({
                where: {
                    id: cityId
                }
            });
           // city.name = data.name;
           // await city
            return city;
        } catch (error) {
            console.log(cityId);
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository; 