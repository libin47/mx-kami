// id即为索引，一般是string，为描述其内容的简单名称
export interface GameSet{
    EventValueType: string,
    ItemType: string,
    HurtType: string,
    WeaponType: string,
}
// 所有类型都可以有remark字段


// 事件，存储所有全局事件
export interface Event{
    value: number,        // 默认值， 初始值应该都是0
}

// 事件触发器
export interface EventFactor{
    eventId: string,            // 事件id
    value: number,              // 该事件目标值
    valueType: string,          // 目前值**对比值时触发 GameSet.EventValueType
}
export interface EventFactorGroup{
    eventFactorIds: string[]    // 事件触发器Id列表
}
export interface WorldMap{
    name: string,           // 区域名称
}

// 地图，存储所有地图信息
export interface Map{
    name: string,           // 显示的区块的名称
    desc?: string,          // 描述
    inId: string,           // 所在区域id

    top?: string,           // 上一格区块id
    down?: string,          // 下一格区块id
    left?: string,          // 左一格区块id
    right?: string,         // 右一格区块id

    mapSetId?: string,      // 地图配置ID
    eventFacGpId?: string,  // 事件触发器组Id
    eventMapId?: string,    // 当列表中所有事件都满足要求时，以此mapid指向的Map代替当前Map
}


// 地图配置信息，包括人物、敌人组、场景的ID
export interface MapSet {
    peopleIds?: string[],   // 人物配置
    enemyIds?: string[],    // 怪物配置
    sceneIds?: string[],    // 场景配置
}

// 伤害种类和计算
export interface Hurt{
    name: string,           // 伤害类型名称
    armor: string[],        // 对应的抗性类型
    jisuan: number[],       // 计算系数
    type: string,           // 计算方式
}

// 物品类
export interface Item {
    name: string,           // 名称
    desc: string,           // 描述
    type: string,           // 物品类型 ItemType

    FreplyHp?: number, 

    Wattack?: number,                 // 攻击力
    Wdistance?: number,               // 攻击距离
    WweaponType?: string,             // 武器类型 WeaponType
    WattackHurt?: string,             // 普通攻击伤害类型
    WattackDesc?: string[]|string,    // 攻击动画描述

    picInfo?: string,       // 图片
}


// 敌人类
export interface Enemy {
    name: string,
    desc: string,
    HP: number,
    TP: number,
    MP: number,
    Speed: number,
    weaponId: number[]
}

// 选项类
export interface Option{
    name: string,                   // 显示的按钮标题
    remark?: string,                // 显示的备注信息

    // 可用条件
    needItemIds?: string[]|string,  // 需要的物品id
    minItemNums?: number[]|number,  // 需要的物品最低数量 包含
    maxItemNums?: number[]|number,  // 需要的物品最大数量 包含
    needEventGpId?: string,         // 需要满足的事件组id
    
    // 选择导致结果
    eventId?: string,               // 选择影响的事件id
    eventValue?: number,            // 将事件的value置于此值
    subItemIds?: string[]|string,   // 扣除的物品id
    subItemNums?: number[]|number,  // 扣除的物品数量
    addItemIds?: string[]|string,   // 给的物品id
    addItemNums?: number[]|number,  // 给的物品数量
}

// 对话类
export interface Talk {
    text: string[],         // 显示的文本
    optionIds?: string[],   // 这里出现的选项
    nextTalkId?: string,    // 下一条Talk
    eventId?: string,       // 触发的事件id
    eventValue?: number,    // 将事件的value置于此值
    eventFacGpId?: string,  // 事件触发器组Id
    eventTalkId?: string,   // 满足时替换Id
}

// 人物类
export interface People {
    name: string,
    desc: string,

    talkId?: string,        // 对话清单，有这个就可以交谈
    enemyId?: string,       // 敌人id，有这个就可以攻击
    buyId?: string,         // 交易id，偶这个就可以交易
    optionIds?: string[],   // 额外选项的id

    eventFacGpId?: string, // 事件触发器组Id
    eventPeopleId?: string, // 满足时使用指向id的People替换
    
}

// 可互动场景类-to be continue
export interface Scene{
    name: string,
    desc: string,
    actions: string,
    useAction: string,
    useEvent?: string|null
}

export interface GameModel{
    data: unknown
}

// user
export interface Player{
    hp: number,
    mp: number,
    item: any,
}