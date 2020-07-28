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

