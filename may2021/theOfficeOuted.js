function outed(meet, boss){

    let sum = 0;
    let count = 0;

    for (let worker in meet) {
        count++;
        if (worker === boss) {
            sum += meet[worker] * 2;
        } else {
            sum += meet[worker];
        }
    }
        return sum / count > 5 ? "Nice Work Champ!" : "Get Out Now!";
}
console.log(
    outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'),// 'Get Out Now!');
    outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'),// 'Nice Work Champ!');
    outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'),// 'Get Out Now!');
    outed({ tim: 8,
        jim: 1,
        randy: 0,
        sandy: 0,
        andy: 9,
        katie: 6,
        laura: 7,
        saajid: 4,
        alex: 4,
        john: 2,
        mr: 2 }, 'tim')
)

function outed(meet, boss) {
    let names = Object.keys(meet)
    let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
    return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
  }