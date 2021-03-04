class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
  }

  This was a unique way to use reduce