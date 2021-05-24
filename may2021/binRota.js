function binRota(arr){


    return arr.reduce((acc,curr,idx) => {
        if (idx % 2 === 0) {
            curr.forEach(el => {
                acc.push(el);
            })
        }
        else {
            curr.reverse().forEach(el => {
                acc.push(el)
            })
        }
        return acc;
    },[]);
}
console.log(
    binRota([["Bob","Nora"],["Ruby","Carl"]]),//["Bob","Nora","Carl","Ruby"],"Test failed");
    binRota([["Billy"]]),//["Billy"],"Test failed");
    binRota([["Billy", "Nancy"]]),//["Billy","Nancy"],"Test failed");
    binRota([["Billy"],["Megan"],["Aki"],["Arun"],["Joy"]]),//["Billy", "Megan", "Aki", "Arun","Joy"],"Test failed");
    binRota([["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]]),//["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"], "Test failed")
    binRota([["Stefan","Raj","Marie"],["Alexa","Amy","Edward"],["Liz","Claire","Juan"],["Dee","Luke","Elle"]]),//["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"], "Test failed");

)