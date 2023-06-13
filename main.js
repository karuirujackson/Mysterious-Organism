// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}
//console.log(returnRandBase());


// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand());
const baseStrandArr = mockUpStrand();
console.log(baseStrandArr);


//Factory Function
const pAequorFactory = (num, basesArr) => {
    return {
      specimenNum : num,
      dna : basesArr,
      mutate() {
        let randomIndex = Math.floor(Math.random() * dna.length);
        let newBase = returnRandBase();
        while (newBase === dna[randomIndex]) {
          newBase = returnRandBase();
      }
        dna[randomIndex] = newBase;
        return dna;
      },
      compareDNA(pAequor) {
        let sameCount = 0;
        for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === pAequor.dna[i]) {
                    sameCount++
                }
        }
        const pctSame = Math.floor((sameCount / this.dna.length) * 100);
        //console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${pctSame}% DNA in common.`);
        return pctSame;
      },
      willLikelySurvive() {
        let total = 0
        for (let i = 0; i < this.Dna.length; i++) {
          if (this.Dna[i] === 'C' || this.Dna[i] === 'G') {
            total++;
          }
        }
        let survive = Math.floor(((total / this.Dna.length) * 100));
        if (survive >= 60) {
          return true;
        } else {
          return false;
        }
      },
      complementStrand() {
        let strandCompliment = [];
        let newElement;
        this.Dna.forEach((element) => {
          if ((element) === 'C') {
            newElement = 'G';
            strandCompliment.push(newElement);
          } else if ((element) === 'G') {
            newElement = 'C';
            strandCompliment.push(newElement);
          } else if ((element) === 'T') {
            newElement = 'A';
            strandCompliment.push(newElement);
          } else if ((element) === 'A') {
            newElement = 'T';
            strandCompliment.push(newElement);
          }
        });
        return strandCompliment;
      }
    };
      
    
  };
console.log(pAequorFactory(1, baseStrandArr));
console.log(pAequorFactory(mutate()));


//const comparingDna = pAequorFactory(baseStrandArr);
//comparingDna.compareDna(pAequor);




/*const pAequorFactory = (num, bases) => {
  return {
    _specimenNum: num,
    _dna: bases,
    mutate() {
      randomBase = Math.floor(Math.random() * 15);
      dnaBasesNoA = ['T', 'C', 'G'];
      dnaBasesNoT = ['A', 'C', 'G'];
      dnaBasesNoC = ['A', 'T', 'G'];
      dnaBasesNoG = ['A', 'T', 'C'];
      if (this._dna[randomBase] === 'A') {
        this._dna[randomBase] = dnaBasesNoA[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === 'T') {
        this._dna[randomBase] = dnaBasesNoT[Math.floor(Math.random() * 3)];
      } else if (this.dna[randomBase] === 'C') {
        this._dna[randomBase] = dnaBasesNoC[Math.floor(Math.random() * 3)];
      } else {
        this._dna[randomBase] = dnaBasesNoG[Math.floor(Math.random() * 3)];
      }
      return this._dna;
    },
    compareDNA(pAequor) {
      numberCommonality = 0;
      for (let i = 0; i < pAequor['dna'].length; i++) {
        if (pAequor.dna[i] === this._dna[i]) {
          numberCommonality++;
        }
      }
      percentCommonality = ((numberCommonality / 15) * 100).toFixed(2);
      console.log(`Specimen #${this._specimenNum} and Specimen #${pAequor._specimenNum} have ${percentCommonality}% DNA in common.`)
    },
    willLikelySurvive() {
      cAndGCounter = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          cAndGCounter++;
        }
      }
      if (cAndGCounter < 9) {
        return false;
      } else {
        return true;
      }
    }
  };
};

// Creating 30 pAequor that are likely to survive
const survivors = [];
while (survivors.length < 30) {
  pAequorNumber = survivors.length + 1;
  newPAequor = pAequorFactory(pAequorNumber, mockUpStrand());
  if (newPAequor.willLikelySurvive() === true) {
    survivors.push(newPAequor);
  }
}
console.log(survivors);


// TESTS FOR FACTORY FUNCTION

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test1._dna);
console.log(test2._dna);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());
console.log(test2.willLikelySurvive());*/
