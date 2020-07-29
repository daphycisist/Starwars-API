// Create User class containing method to fetch specific data from API
export class User {
    constructor(user) {
        this.user = user
    }

    get actorDetails() {
        const {
            name,
            gender,
            height
        } = this.user

        return {
            name,
            gender,
            height
        }
    }
}

