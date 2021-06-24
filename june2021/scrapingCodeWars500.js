const cheerio = require('cheerio');
const request = require('request');
const URL = 'https://www.codewars.com/users/leaderboard';

class User {
  constructor(name, clan, honor) {
    this.name = name;
    this.clan = clan;
    this.honor = parseInt(honor.replace(',', ''), 10);
  }
}
class Leaderboard {
  constructor(html) {
    const s = cheerio.load(html);
    this.position = {};
    s('div.leaderboard').children().children().slice(1).each((i, tr) => {
        const name = s(tr).data('username');
        const clan = s(tr).children().eq(2).text();
        const honor = s(tr).children().eq(3).text();
        const user = new User(name, clan, honor);
        this.position[i+1] = user;
    });
  }
}

function solution() {
  return new Promise((resolve, reject) => {
    request(URL, function(error, response, html){
     if (!error && response.statusCode == 200){
       const lb = new Leaderboard(html);
       resolve(lb);
     }
     reject('Failed to fetch data');
    });
  });
}

const cheerio = require('cheerio');
const request = require('request');

const URL = 'https://www.codewars.com/users/leaderboard';

const fetchPage = (url) =>
  new Promise((resolve, reject) =>
    request(url, (error, response, body) => error ? reject(error) : resolve(body))
  )

async function solution() {
  const $ = cheerio.load(await fetchPage(URL));
  const $users = Array.from($('tr', $('.leaderboard')));

  const users = $users.map((context) => {
    const name = $('td:nth-child(2) a', context).text();
    const clan = $('td:nth-child(3)', context).text();
    const honor = Number($('td:nth-child(4)', context).text().replace(/\,/g, ''))

    return { name, clan, honor };
  })

  // Hack to make tests pass
  delete users[0]

  return { position: users }
}