let pockets = {
    bob: [1],
    tom: [2, 5],
    jane: [7]
  }


function find_suspects(pockets, allowed_items) {
    let suspects = Object.keys(pockets);
    let carriedItems = Object.values(pockets);
    let guiltySuspects = [];

    carriedItems.forEach((group,idx) => {
        for (let i = 0; i < group.length; i++) {
            if (!allowed_items.includes(group[i])) {
                guiltySuspects.push(suspects[idx])
            }
        }
    })
    if (guiltySuspects.length === 0) return null;
    return Array.from(new Set(guiltySuspects));
}

console.log(
    find_suspects(pockets, [1, 2]),//=> [:tom, :jane]
    find_suspects(pockets, [1, 7, 5, 2]),//=> nil
    find_suspects(pockets, []),//=> [:bob, :tom, :jane]
    find_suspects(pockets, [7]),//=> [:bob, :tom]
)