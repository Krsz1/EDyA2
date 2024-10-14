class Task {
    constructor(title, description, nextPoints) {
        this.title = title;
        this.description = description; 
        this.nextPoints = nextPoints;
    }

    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Points to Next Task: ${this.nextPoints}`);
    }
}

let tasks = [];
