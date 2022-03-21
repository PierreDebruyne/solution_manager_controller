const axios = require("axios");

module.exports.ResourceManagerController = class {
    constructor(url) {
        this.url = url;
        if (!this.url.startsWith('http://')) {
            this.url = "http://" + this.url;
        }
    }

    async get_solutions() {
        const solution_manager_url = this.url + "/solutions";
        try {
            var {data} = await axios.get(solution_manager_url)
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de récupérer la liste des solutions"};
        }
    }

    async run_solution(solution) {
        const solution_manager_url = this.url + "/solutions";
        try {
            var {data} = await axios.post(solution_manager_url, {solution})
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossible de créer une solution"};
        }
    }

    async remove_solution(solution_id) {
        const solution_manager_url = this.url + "/solutions/" + solution_id;
        try {
            var {data} = await axios.delete(solution_manager_url)
            return data;
        } catch (e) {
            console.log(e.message)
            throw {message: "Impossibe de supprimer la solution"};
        }
    }
}