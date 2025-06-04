let litmir = [
    {author: 'Orwell', title: '1984'},
    {author: 'Nesbo', title: 'Knife'},
    {author: 'Caroll', title: 'Alice in Wonderland'},
    {author: 'Gogol', title: 'Viy'}];

let results = [
    {name: 'Vasya', points: 150},
    {name: 'Moshe', points: 120},
    {name: 'Lisa', points: 100},
    {name: 'Boruh', points: 150},
    {name: 'Sam', points: 120},
    {name: 'Lida', points: 200},
]

function sortPointName(arr) {
    return arr.sort((a, b) => {
        if (a.points < b.points) return 1;
        if (a.points > b.points) return -1;
        else {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        }
    })
}

function sortTitle(arr) {
    return arr.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1
        return 0;
    });
}

console.log(sortTitle(litmir));
console.log(sortPointName(results));