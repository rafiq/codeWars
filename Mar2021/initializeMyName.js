function initializeNames(name){

    let nameArr = name.split(" ");

    return (nameArr.reduce((acc,curr,idx) => {
        if (nameArr.length > 2 && idx !== 0 && idx !== nameArr.length - 1) {
            acc += initializeName(curr)
        } else acc += curr + " ";
        return acc;
    },"")).slice(0,-1)

  }
  function initializeName(name) {


    return name[0] + ". ";
  }
  console.log(
    initializeNames('Jack Ryan'),//'Jack Ryan','');
    initializeNames('Lois Mary Lane'),//'Lois M. Lane','');
    initializeNames('Dimitri'),//'Dimitri','');
    initializeNames('Alice Betty Catherine Davis'),//'Alice B. C. Davis','');
    initializeNames('Niki Indie Evie Tora Colten Sylvia Derica Gardner'),//'Alice B. C. Davis','');
  )