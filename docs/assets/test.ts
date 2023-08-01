interface sharp {
    area: number;
    calc: () => number;
}

class angle implements sharp {
    area: number;

    constructor(area: number) {
        this.area = area;
    }

    calc(): number {
        return 0;
    }

}

let a = new angle(2);

// 固定數量，不定數量
interface code {
    name: string;

    [tt: string]: string;
}

let a2: code = {name: 'a', aa: 'a'}
// tupe is array
type tuple = [a1: number]

export interface Header {
    parentTitles: string;
    childHeaders?: ChildHeader[];
    titleIcon?: string;
    url?: string;
}

export interface ChildHeader {
    childTitles: string;
    siblingHeaders?: SiblingHeader[];
    icon?: string;
    url?: string;
}


export interface SiblingHeader {
    siblingTitles: string[];
    icon?: string;
    url?: string;
}

let h2: Header[] = [
    {
        parentTitles: 'p1',
        childHeaders:
            [
                {
                    childTitles: 'c1',
                    siblingHeaders:
                        [
                            {
                                siblingTitles: ['s1']
                            }
                        ]
                }
            ]
    },
    {
        parentTitles: 'p1',
        childHeaders:
            [
                {
                    childTitles: 'c1',
                    siblingHeaders:
                        [
                            {
                                siblingTitles: ['s1']
                            }
                        ]
                }
            ]
    },
]

const headers: Header[] = [{
    parentTitles: 'Settings',
    childHeaders: [{
        childTitles: 'General Setup',
        siblingHeaders: [{
            siblingTitles: ['Vessel', 'Port', 'Owner', 'Engine Type',  'Vessel Type'],
            icon: '',
            url: ''
        }],
        icon: '',
        url: 'home/general-setup'
    }]
}];

// let headers: Header = [
//     {
//         parentTitles: 'Settings',
//         childHeaders: ChildHeader = [{
//             childTitles: 'General Setup',
//             siblingHeaders: SiblingHeader = [{
//                 siblingTitles: ['Vessel', 'Port', 'Owner', 'Engine Type',
//                     'Vessel Type'],
//                 icon: '',
//                 url: ''
//             }],
//             icon: '',
//             url: 'home/general-setup'
//         }]
//     }
//
// ];
