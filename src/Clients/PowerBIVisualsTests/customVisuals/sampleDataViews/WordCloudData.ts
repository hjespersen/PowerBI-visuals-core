﻿/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved. 
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *   
 *  The above copyright notice and this permission notice shall be included in 
 *  all copies or substantial portions of the Software.
 *   
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/// <reference path="../../_references.ts"/>

module powerbitests.customVisuals.sampleDataViews {
    import ValueType = powerbi.ValueType;

    export class WordCloudData extends DataViewBuilder {
        public static ColumnCategory: string = "Country";
        public static ColumnValues: string = "Values";

        public valuesCategoryValues: any[][] = [
            ["Afghanistan", 510],
            ["Albania", 314],
            ["Algeria", 780],
            ["Andorra", 490],
            ["Angola", 925],
            ["Antigua and Barbuda", 740],
            ["Argentina", 406],
            ["Armenia", 887],
            ["Aruba", 680],
            ["Australia", 299],
            ["Austria", 190],
            ["Azerbaijan", 410],
            ["Gabon", 742],
            ["Georgia", 19],
            ["Germany", 752],
            ["Ghana", 729],
            ["Greece", 105],
            ["Grenada", 405],
            ["Guatemala", 586],
            ["Guinea", 495],
            ["Guinea-Bissau", 967],
            ["Guyana", 283],
            ["Haiti", 629],
            ["Holy See", 212],
            ["Honduras", 776],
            ["Hong Kong", 400],
            ["Hungary", 644],
            ["Iceland", 875],
            ["India", 780],
            ["Indonesia", 808],
            ["Iran", 908],
            ["Iraq", 905],
            ["Ireland", 395],
            ["Israel", 973],
            ["Italy", 761],
            ["Macau", 224],
            ["Macedonia", 438],
            ["Madagascar", 767],
            ["Malawi", 347],
            ["Malaysia", 378],
            ["Maldives", 763],
            ["Mali", 517],
            ["Malta", 517],
            ["Marshall Islands", 545],
            ["Mauritania", 381],
            ["Mauritius", 231],
            ["Mexico", 36],
            ["Micronesia", 474],
            ["Moldova", 29],
            ["Monaco", 117],
            ["Mongolia", 842],
            ["Montenegro", 810],
            ["Morocco", 595],
            ["Mozambique", 137],
            ["United Kingdom", 622],
            ["United States", 585],
            ["Uganda", 599],
            ["Ukraine", 744],
            ["United Arab Emirates", 875],
            ["Uruguay", 513],
            ["Uzbekistan", 28],
            ["Romania", 587],
            ["Russia", 518],
            ["Rwanda", 282],
            ["Saint Kitts and Nevis", 617],
            ["Saint Lucia", 92],
            ["Saint Vincent and the Grenadines", 837],
            ["Samoa", 352],
            ["San Marino", 869],
            ["Papua New Guinea", 698],
            ["Fiji", 139],
            ["Finland", 365],
            ["France", 966]
        ];

        public getDataView(columnNames?: string[]): powerbi.DataView {
            return this.createCategoricalDataViewBuilder([
                {
                    source: {
                        displayName: WordCloudData.ColumnCategory,
                        roles: { "Category": true },
                        type: ValueType.fromDescriptor({ text: true })
                    },
                    values: this.valuesCategoryValues.map(x => x[0])
                }
                ],[
                {
                    source: {
                        displayName: WordCloudData.ColumnValues,
                        roles: { "Values": true },
                        type: ValueType.fromDescriptor({ text: true })
                    },
                    values: this.valuesCategoryValues.map(x => x[1])
                }
                ], columnNames).build();
        }
    }
}