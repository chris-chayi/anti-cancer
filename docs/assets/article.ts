// noinspection JSUnusedGlobalSymbols

export interface article {
    text: string;
    next?: article[]
}

export let datas: article[] = [
    {
        text: '禁忌', next: [
            {
                text: '少鹽', next: [
                    {text: '鹽 = 食鹽，醬油，味增，醃漬，沙茶醬'}]
            }
            ,
            {
                text: '鍋具', next: [
                    {text: '安全無毒的鍋具'}
                ]
            },
            {
                text: '化妝品，保養品', next: [
                    {text: '染髮劑，生長因子'}
                ]
            }
        ]
    },
    {
        text: '蔬果湯', next: [
            {text: '蔬果汁使用破壁機，或者延長打果汁的時間。'},
            {text: '徹底清除農藥'},
            {
                text: '煮湯', next: [
                    {text: '不生吃，不熱炒。'},
                ]
            },
            {
                text: '無鹽', next: [
                    {text: '不加鹽，不加骨頭，不加肉，不加雞湯塊'},
                ]
            },
            {text: '只用純水'},
            {
                text: '混合多種顏色的蔬果', next: [
                    {text: '多樣蔬菜，每種蔬菜份量少'},
                    {text: '例如：紅蘿蔔，青椒，紫色茄子，黃色南瓜，綠葉蔬菜...少許份量'},
                ]
            },
            {text: '緩慢烹調'},
            {
                text: '新鮮', next: [
                    {text: '一次只煮1餐或2餐份'},
                    {text: '蔬果已經被空氣氧化的部分，不吃'}
                ]
            }
        ]
    },
    {
        text: '蛋白質斷食', next: [{
            text: '吃蔬果湯時，不吃肉'
        }]
    },
    {
        text: '使用好油'
    }
]

export let datas2: article[] =
    [
        {
            text: '純水',
            next: [{
                text: '水中的氟化物，氯化物，致癌'
            }]
        },
        {
            text: '少鹽', next: [
                {text: '蛋白質和鹽結合之後 -> 細胞水腫 -> 細胞泡水 -> 細胞失能 -> 腫瘤微環境'},
                {text: '鹽分 -> 促進細胞分裂'},
                {text: '鹽有重要的生理作用。我們需要一點點鹽'}
            ]
        },
        {
            text: '得到植化素', next: [{text: '打破細胞壁', next: [{text: '加熱'}, {text: '破壁機'}]}]
        },
        {
            text: '植化素', next: [
                {
                    text: '類黃酮素', next: [{
                        text: '(1) 花青素、前花青素；(2) 兒茶素；(3) 槲皮素；(4) 檸檬黃素；(5) 芸香素；(6) 芹菜素等。\n'
                    }]
                },
                {
                    text: '類胡蘿蔔素', next: [{
                        text: '(1) β-胡蘿蔔素、β-隱黃素、α-胡蘿蔔素；(2) 葉黃素；(3) 玉米黃素；(4) 茄紅素；(5) 辣椒素、辣椒紅素等。\n'
                    }]
                },
                {
                    text: '有機硫化物', next: [{
                        text: '(1) 大蒜素；(2) 蘿蔔硫素；(3) 麩胱甘肽；(4) 吲哚；(5) 異硫氰酸酯等。\n'
                    }]
                },
                {
                    text: '酚酸類', next: [{
                        text: '(1) 綠原酸；(2) 鞣花酸；(3) 沒食子酸；(4) 對香豆酸；(5) 阿魏酸；(6) 水楊酸等。\n'
                    }]
                },
                {
                    text: '植物雌激素', next: [{
                        text: '(1) 異黃酮；(2) 木酚素；(3) 薯芋皂等。'
                    }]
                },
                {
                    text: '其他', next: [{
                        text: '(1) 葉綠素；(2) 薑黃素；(3) 白藜蘆醇；(4) 咖啡酸；(5) 檸檬酸烯、檸檬苦素；(6) 植物皂素；(7) 苦瓜苷；(8) 迷迭香酸等'
                    }]
                },
                {text: '植化素可以進入大腦'},
                {text: '植化素可以耐熱100度，溶於水，不耐高溫'}
            ]
        },
        {
            text: '湯中有鉀離子', next: [
                {text: '細胞能量，去水腫'},
                {text: '注意！如果吃過頭 -> 高血鉀症狀'}
            ]
        }
    ]
