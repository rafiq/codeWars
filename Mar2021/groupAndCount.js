function group_and_count(input) {


    if (!input || input.length === 0) return null;
    return input.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;

        return acc;
    },{});
}
console.log(
    group_and_count([0,1,1,0]),// {0=>2, 1=>2})
    group_and_count([]),// {0=>2, 1=>2})
)