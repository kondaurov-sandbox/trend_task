import * as Mod from '../../src/SyncArrHelper'
import {expect} from 'chai'

//https://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected

describe("arrNumbers2ArrayTuples should work", () => {

    it("case 1", () => {

        let numbers = [1,2,3,4,5,6,7,8];

        let actual = Mod.arrNumbers2ArrayTuples(numbers);

        expect(actual).to.eql([
            [1, 8]
        ]);

        expect(Mod.arrNumbersToStr(numbers)).to.eql("1-8")

    });

    it("case 2", () => {

        let numbers = [1,3,4,5,6,7,8];

        expect(Mod.arrNumbers2ArrayTuples(numbers)).to.eql([
            [1, 1],
            [3, 8]
        ]);

        expect(Mod.arrNumbersToStr(numbers)).to.eql("1,3-8")

    });

    it("case 3", () => {

        let numbers = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002];

        expect(Mod.arrNumbers2ArrayTuples(numbers)).to.eql([
            [1, 6],
            [100, 100],
            [1091, 1091],
            [1999, 2002]
        ]);

        expect(Mod.arrNumbersToStr(numbers)).to.eql("1-6,100,1091,1999-2002")

    });

    it("case 4", () => {

        let numbers = [1,2,3,15,23];

        expect(Mod.arrNumbers2ArrayTuples(numbers)).to.eql([
            [1, 3],
            [15, 15],
            [23, 23]
        ]);

        expect(Mod.arrNumbersToStr(numbers)).to.eql("1-3,15,23")

    })

});

