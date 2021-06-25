// !This was just to see what a high level question would look like
const atomTypes = new Map([
    ["C",  { valenceNumber: 4, atomicWeight: 12.0, order: 1  }],
    ["H",  { valenceNumber: 1, atomicWeight:  1.0, order: 20 }],
    ["O",  { valenceNumber: 2, atomicWeight: 16.0, order: 3  }],
    ["B",  { valenceNumber: 3, atomicWeight: 10.8, order: 4  }],
    ["Br", { valenceNumber: 1, atomicWeight: 80.0, order: 5  }],
    ["Cl", { valenceNumber: 1, atomicWeight: 35.5, order: 6  }],
    ["F",  { valenceNumber: 1, atomicWeight: 19.0, order: 7  }],
    ["Mg", { valenceNumber: 2, atomicWeight: 24.3, order: 8  }],
    ["N",  { valenceNumber: 3, atomicWeight: 14.0, order: 9  }],
    ["P",  { valenceNumber: 3, atomicWeight: 31.0, order: 10 }],
    ["S",  { valenceNumber: 2, atomicWeight: 32.1, order: 11 }],
]);

class InvalidBond extends Error {}
class UnlockedMolecule extends Error {}
class LockedMolecule extends Error {}
class EmptyMolecule extends Error {}

class Atom {
    constructor(elt, id_) {
        this.id = id_;
        this.bonds = [];
        this.mutateTo(elt);
    }
    mutateTo(element) {
        if (!atomTypes.has(element) || this.bonds.length > atomTypes.get(element).valenceNumber) throw new InvalidBond;
        return Object.assign(this, atomTypes.get(element), {element});
    }
    toString() {
        return `Atom(${this.element}.${this.id}${this.bonds.length ? ": " : ""}${
            this.bonds.sort( (a,b) => a.order - b.order || a.id - b.id )
                      .map( other => other.element + (other.element === "H" ? "" : other.id) )
        })`;
    }
}

class Molecule {
    constructor(name = "") {
        this.name = name;
        this.atoms = [];
        this.branches = [];
        this.locked = false;
    }
    requireLockToBe(locked) {
        if (this.locked !== locked) throw this.locked ? new LockedMolecule : new UnlockedMolecule;
        return true;
    }
    bondAtoms(...atoms) {
        this.requireLockToBe(false);
        let a;
        atoms.forEach( (b, i) => {
            if (i && (a === Object(b) || a.bonds.length >= a.valenceNumber
                || b instanceof Atom && b.bonds.length >= b.valenceNumber)) throw new InvalidBond;
            if (b.length) b = atoms[i] = this.newAtom(b);
            if (i) a.bonds.push(b), b.bonds.push(a);
            a = b;
        });
        return atoms;
    }
    newAtom(elt) {
        this.requireLockToBe(false);
        const atom = new Atom(elt, this.atoms.length+1);
        this.atoms.push(atom);
        return atom;
    }
    transaction(cb) {
        const savePoint = this.atoms.length;
        let result;
        try {
            result = cb();
        }
        catch(e) {
            this.atoms.length = savePoint;
            throw e;
        }
        return result;
    }
    get formula() {
        this.requireLockToBe(true);
        const counts = new Map(Array.from(atomTypes, ([elt]) => [elt, 0]));
        this.atoms.forEach( (atom) => counts.set(atom.element, counts.get(atom.element)+1) );
        return Array.from(counts).filter(count => count[1]).map(([elt, count]) => elt + (count < 2 ? "" : count)).join("");
    }
    get molecularWeight() {
        return this.requireLockToBe(true) && this.atoms.reduce( (sum, atom) => sum + atom.atomicWeight, 0 );
    }
    brancher(...carbonCounts) {
        this.branches.push(...carbonCounts.map(length => this.bondAtoms(..."C".repeat(length))))
        return this;
    }
    bounder(...quads) {
        quads.forEach(([c1,b1,c2,b2]) => this.bondAtoms(this.branches[b1-1][c1-1], this.branches[b2-1][c2-1]));
        return this;
    }
    mutate(...triplets) {
        this.requireLockToBe(false);
        triplets.forEach(([nc, nb, elt]) => this.branches[nb-1][nc-1].mutateTo(elt));
        return this;
    }
    add(...triplets) {
        triplets.forEach(([nc, nb, elt]) => this.bondAtoms(this.branches[nb-1][nc-1], elt));
        return this;
    }
    addChaining(nc, nb, ...elts) {
        this.transaction(() => this.bondAtoms(this.branches[nb-1][nc-1], this.bondAtoms(...elts)[0]));
        return this;
    }
    closer() {
        this.requireLockToBe(false);
        this.atoms.forEach( atom => {
            while (atom.valenceNumber > atom.bonds.length) this.bondAtoms(atom, "H");
        });
        this.locked = true;
        return this;
    }
    unlock() {
        this.requireLockToBe(true);
        this.atoms.forEach(atom => atom.bonds = atom.bonds.filter(bonded => bonded.element !== "H"));
        this.atoms = this.atoms.filter(atom => atom.element !== "H");
        this.atoms.forEach((atom, i) => atom.id = i+1);
        this.branches = this.branches.map(atoms => atoms.filter(atom => atom.element !== "H")).filter(atoms => atoms.length);
        if (!this.branches.length) throw new EmptyMolecule;
        this.locked = false;
        return this;
    }
}