
import { observer } from 'mobx-react-lite'
import { useEffect, useMemo, FC, memo, SVGProps, useState, StrictMode, useCallback } from 'react'
import React from 'react'
import Attributes from 'react'
import { useStore } from '../store'
import styles from './games.module.css'
import { $axios, apiClient } from 'utils/client'
import { Map, Item, People, Enemy, MapSet, GameModel } from 'gamelibs/dataType'
import { NextPage } from 'next'
import classNames from 'clsx'
import { MasterIcon, PeopleIcon, BuildIcon } from 'components/universal/Icons/games'
import { isNull } from 'lodash'
import { clear } from 'console'
// import {Motion, spring, presets} from "react-motion";


// 联网获取数据
async function getGameData() {
  const [dataMapState, dataPeopleState, dataEnemyState, dataEnemyGroupState, dataItemState, dataMapSetState, dataEventState,
    dataOptionState, dataTalkState, dataWorldMapState, dataPlayerState, dataAiState] = await Promise.allSettled([
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Map',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'People',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Enemy',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'EnemyGroup',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Item',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'MapSet',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Event',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Option',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Talk',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'WorldMap',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'Player',),
      apiClient.snippet.getByReferenceAndName<unknown>('game', 'AiEnemy',),
    ])
  // console.log(dataEventState)

  let dataMap: unknown | null = null
  let dataPeople: unknown | null = null
  let dataEnemy: unknown | null = null
  let dataEnemyGroup: unknown | null = null
  let dataItem: unknown | null = null
  let dataMapSet: unknown | null = null
  let dataEventBase: unknown | null = null
  let dataOption: unknown | null = null
  let dataTalk: unknown | null = null
  let dataWorldMap: unknown | null = null
  let dataPlayerBase: unknown | null = null
  let dataAi: unknown | null = null
  if (dataMapState.status === 'fulfilled') { dataMap = { ...dataMapState.value } }
  if (dataPeopleState.status === 'fulfilled') { dataPeople = { ...dataPeopleState.value } }
  if (dataEnemyState.status === 'fulfilled') { dataEnemy = { ...dataEnemyState.value } }
  if (dataEnemyGroupState.status === 'fulfilled') { dataEnemyGroup = { ...dataEnemyGroupState.value } }
  if (dataItemState.status === 'fulfilled') { dataItem = { ...dataItemState.value } }
  if (dataMapSetState.status === 'fulfilled') { dataMapSet = { ...dataMapSetState.value } }
  if (dataEventState.status === 'fulfilled') { dataEventBase = { ...dataEventState.value } }
  if (dataOptionState.status === 'fulfilled') { dataOption = { ...dataOptionState.value } }
  if (dataTalkState.status === 'fulfilled') { dataTalk = { ...dataTalkState.value } }
  if (dataWorldMapState.status === 'fulfilled') { dataWorldMap = { ...dataWorldMapState.value } }
  if (dataPlayerState.status === 'fulfilled') { dataPlayerBase = { ...dataPlayerState.value } }
  if (dataAiState.status === 'fulfilled') { dataAi = { ...dataAiState.value } }
  return {
    dataMap, dataPeople, dataEnemy, dataEnemyGroup, dataItem, dataMapSet,
    dataEventBase, dataOption, dataTalk, dataWorldMap, dataPlayerBase, dataAi
  }
}




const GameView = (props) => {
  // 请求数据
  const { dataMap, dataPeople, dataEnemy, dataEnemyGroup, dataItem, dataMapSet,
    dataEventBase, dataOption, dataTalk, dataWorldMap, dataPlayerBase, dataAi } = props
  // console.log(dataItem)

  const [curPage, setCurPage] = useState(0) // 0 map, 1 people, 2 enemy, 3 scene, 4 talk, 5 battle，

  const [myWeizhi, setWeizhi] = useState(dataMap["fengCheCunW1"]) // 所在地的object
  const [checkObj, setCheckObj] = useState('girl')
  const [talk, settalk] = useState('')                      // 对话事件id
  const [talkIndex, settalkIndex] = useState(0)             // 对话的索引

  const [battleCtrl, setBattle] = useState({ now: ''})                // 战场控制器 { now: ''  , s:1}
  const [dataBattle, setDataBattle] = useState({ shiLaiMu: dataEnemy['dataEnemy'], step: 1 }) // 敌人清单
  const [battleText, setBattleText] = useState(['']) // 敌人清单

  const [wutai, setWutai] = useState([dataEnemy['shiLaiMu'], null]) // 战斗舞台清单
  const [battleIndex, setBattleIndex] = useState('')        // 战斗选单 索引 key
  const [battleISub, setBattleISub] = useState(0)        // 次级战斗选单 索引 index

  const [dataPlayer, setPlayer] = useState(dataPlayerBase)  // 玩家状态
  const [dataEvent, setEvent] = useState(dataEventBase)     // 事件状态


  // 控制移动
  // 刷新地图
  function resetMap() {
    let fw = myWeizhi
    while (fw?.eventGet && eventOk(fw.eventGet.events)) {
      fw = dataMap[fw.eventGet.eventMap]
    }
    setWeizhi(fw)
  }
  // 方向移动
  function toDir(arg) {
    console.log(arg)
    const dir = arg.target.value
    if (myWeizhi?.[dir]) {
      let fw = dataMap[myWeizhi[dir]]
      while (fw?.eventGet && eventOk(fw.eventGet.events)) {
        fw = dataMap[fw.eventGet.eventMap]
      }
      setWeizhi(fw)
    }
  }
  // 判断是否可以移动
  function canDir(arg) {
    return myWeizhi?.[arg]
  }

  // 交互
  // 点击人
  function checkPeopleClick(arg) {
    const id = arg.target.value
    const mapset = dataMapSet[myWeizhi.mapSetId]
    setCheckObj(mapset.peopleIds[id])
    setCurPage(1);
  }
  // 点击怪物
  function checkEnemyClick(arg) {
    const id = arg.target.value
    const mapset = dataMapSet[myWeizhi.mapSetId]
    setCheckObj(mapset.enemyIds[id])
    setCurPage(2)
  }
  // 返回
  function checkMap() {
    setCurPage(0)
  }
  // 事件
  function eventOk(eventGet) {
    let x = true
    for (var ef of eventGet) {
      if (ef.eventtype == 'Equal') {
        x = x && (ef.eventvalue == dataEvent[ef.eventid].value)
      }
      else if (ef.eventtype == 'Bigger') {
        x = x && (dataEvent[ef.eventid].value > ef.eventvalue)
      }
      else if (ef.eventtype == 'Smaller') {
        x = x && (dataEvent[ef.eventid].value < ef.eventvalue)
      }
    }
    return x
  }

  // 对话
  // 地图的对话按钮
  function peopleTalk(arg) {
    const id = arg.target.value
    const objid = dataMapSet[myWeizhi.mapSetId]?.peopleIds[id]
    setCheckObj(objid);
    const argg = { target: { value: objid } }
    startTalk(argg)
  }
  // check页面的对话按钮
  function startTalk(arg) {
    const id = arg.target.value
    let talkid = dataPeople[id]?.talkId
    // const talkl = dataTalk[talkid]
    while (dataTalk?.[talkid] && dataTalk[talkid]?.eventGet && eventOk(dataTalk[talkid].eventGet.events)) {
      talkid = dataTalk[talkid].eventGet.eventTalk
    }
    settalk(talkid)
    settalkIndex(0)
    setCurPage(4);
  }
  // 下一句
  function nextTalk() {
    if (talkIndex + 1 == dataTalk[talk]?.text.length) {
      dataPeople[checkObj].talkId = dataTalk[talk].nextTalkId
      setCurPage(0)
    }
    else {
      settalkIndex(talkIndex + 1)
    }
  }
  // 是否可以点击option
  function ableOption(id) {
    // if(isNull(id)){return true}
    const op = dataOption[id]
    let x = true
    for (var item of op.itemGet) {
      x = x && (dataPlayer.item?.[item.itemid] >= item.nummin && (!item?.nummax || dataPlayer.item?.[item.itemid] <= item?.nummax))
    }
    x = x && (!op?.eventGet || eventOk(op?.eventGet))
    return x
  }
  // 点击option 
  function optionComplete(arg) {
    const id = arg.target.value

    let player = dataPlayer
    for (var item of dataOption[id]?.itemSet) {
      if (!player.item?.[item.itemid]) {
        player.item[item.itemid] = Math.max(item.itemnum, 0)
        if (item.itemnum < 0) { console.log("想扣没有的东西，检查option的要求限制是否正确") }
      }
      else { player.item[item.itemid] = player.item[item.itemid] + item.itemnum }
    }
    setPlayer(player)

    let eventCopy = dataEvent
    for (var event of dataOption[id]?.eventSet) {
      eventCopy[event.eventid].value = event.eventvalue
    }

    setEvent(eventCopy)

    startTalk({ target: { value: checkObj } })
    resetMap()
  }

  // 战斗
  // 地图上点击战斗按钮
  function peoplebattle(arg) {
    const id = arg.target.value
    const objid = dataMapSet[myWeizhi.mapSetId]?.peopleIds[id]
    setCheckObj(objid);
    const argg = { target: { value: objid } }
    startpeoplebattle(argg)
  }
  function masterattle(arg) {
    const id = arg.target.value
    const objid = dataMapSet[myWeizhi.mapSetId]?.enemyIds[id]
    setCheckObj(objid);
    const argg = { target: { value: objid } }
    startmasterbattle(argg)
  }
  // enemyGroup 2 enemys
  function getenemylist(enemyGroup) {
    const enemys = enemyGroup.enemys
    let s: string[] = []
    for (var enemy of enemys) {
      if (!enemy?.prob || Math.random() < enemy.prob) {
        let num
        if (enemy?.minnum) {
          num = parseInt(Math.random() * (enemy.maxnum - enemy.minnum + 1) + enemy.minnum + "")
        }
        else {
          num = parseInt(Math.random() * (enemy.maxnum + 1) + "")
        }
        for (var i = 0; i < num; i++) {
          s.push(enemy.enemyid)
        }
      }
    }
    return s
  }
  // 对人物战斗
  function startpeoplebattle(arg) {
    const pid = arg.target.value
    var r = confirm("确定要对该非敌对角色动手吗？")
    if (r) {
      const enemy = dataPeople[pid].enemyId
      // 先按怪物组id算，不然按怪物id算
      const enemys = (dataEnemyGroup?.[enemy]) ? getenemylist(dataEnemyGroup[enemy]) : [enemy]
      startbattle(enemys)
    }
    else {
      console.log(false)
    }
  }
  // 对怪
  function startmasterbattle(arg) {
    const pid = arg.target.value
    const enemys = (dataEnemyGroup?.[pid]) ? getenemylist(dataEnemyGroup[pid]) : [pid]
    startbattle(enemys)
  }
  // 设置菜单信息
  function setPlayerBattleMenu() {
    let menu = {}
    menu['move'] = [{ 'name': '移动', 'dis': 2 }, { 'name': '快速移动', 'dis': 3 }]
    menu['attack'] = []
    for (var wp of dataPlayer.weaponIds) {
      const wps = dataItem[wp]
      // console.log(wps)
      menu['attack'].push({ 'name': wps.name, 'dis': wps.wdistance })
    }
    menu['skill'] = []
    for (var wp of dataPlayer.skill) {
      menu['skill'].push({ 'name': wp, 'dis': 4 })
    }
    menu['items'] = []
    for (let wp in dataPlayer.item) {
      const it = dataItem[wp]
      if (it.type != 'Weapon') {
        menu['items'].push({ 'name': it.name, 'dis': -1 })
      }
    }
    menu['def'] = [{ 'name': '防御架势', 'dis': 0 }]
    menu['run'] = [{ 'name': '全体逃脱', 'dis': -1 }, { 'name': '自己逃脱', 'dis': 0 }]
    let pdc = dataPlayer
    pdc['menu'] = menu
    setPlayer(pdc)
  }
  // 开始战斗
  function startbattle(enemys) {
    setBattleText([''])
    for (var ind in dataBattle) {
      delete dataBattle[ind]
    }

    for (var enemy of enemys) {
      let houzhui = ''
      while (dataBattle?.[enemy + houzhui]) {

        let enemynn = houzhui
        for (var h of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']) {
          enemynn = houzhui + h
          // console.log(enemynn)
          if (!(dataBattle?.[enemy + enemynn])) {
            houzhui = enemynn
            break;
          }
        }
        houzhui = enemynn
      }
      // dataBattle.start = true
      dataBattle[enemy + houzhui] = JSON.parse(JSON.stringify(dataEnemy[enemy]))
      dataBattle[enemy + houzhui].name = dataBattle[enemy + houzhui].name + houzhui
      dataBattle[enemy + houzhui].step = 0
      if (!dataBattle[enemy + houzhui].hp_) { dataBattle[enemy + houzhui].hp_ = Number(dataBattle[enemy + houzhui].hp) }
      if (!dataBattle[enemy + houzhui].mp_) { dataBattle[enemy + houzhui].mp_ = dataBattle[enemy + houzhui].mp }
      if (!dataBattle[enemy + houzhui].speed_) { dataBattle[enemy + houzhui].speed_ = dataBattle[enemy + houzhui].speed }
    }
    setDataBattle(dataBattle)
    dataPlayer.step = 0
    startwutai(dataBattle)

    setBattleIndex('')
    setCurPage(5)
    ctrlbattle(true)
  }
  // 战斗控制器
  function ctrlbattle(add = true) {

    let enemystep: any[] = []
    for (var ei in dataBattle) {
      if (!dataBattle[ei]) { continue }
      if (add && dataBattle[ei]?.step > -1) { dataBattle[ei].step += 1 }
      if (dataBattle[ei]?.step / (1 - dataBattle[ei].speed / (dataBattle[ei].speed + 100)) > 100) {
        enemystep.push(ei)
      }
    }
    let playerstep: any[] = []
    // for(var pi in dataPlayer){}
    if (add) { dataPlayer.step += 1 }
    if (dataPlayer.step / (1 - dataPlayer.speed / (dataPlayer.speed + 100)) > 100) {
      playerstep.push(1)
    }
    if (enemystep.length > 0) {
      setBattle({now: enemystep[0]})

      // battleCtrl.now = enemystep[0]
      // setBattle(battleCtrl)

      // setBattle(enemystep[0])

      stepEnemy(enemystep[0])
    }
    else if (playerstep.length > 0) {
      setPlayerBattleMenu()

      setBattle({ now: 'player'})

      // battleCtrl.now = 'player'
      // setBattle(battleCtrl)

      // setBattle('player')
    }
    else {
      setBattle({ now: ''})
      // battleCtrl.now = ''
      // setBattle(battleCtrl)
      // setBattle(()=>'')

      setDataBattle(dataBattle)
      setTimeout(() => { ctrlbattle(true) }, 3)
      // ctrlbattle(true) 
    }
  }
  // 敌人控制
  function stepEnemy(index) {
    let enemy = dataBattle[index]
    if(!enemy?.ai){
      enemy.ai = 'base'
    }
    let ai = dataAi[enemy.ai]
    // run
    if(ai.canRun && Math.random()<ai.runProb && enemy.hp_/enemy.hp<ai.runHp){
      console.log(enemy.name+' run!!')
    }
    // recover
    else if(ai.canRecover && Math.random()<ai.recoverProb){
      console.log(enemy.name+' recover!!')
    }
    // support
    else if(ai.canSupport && Math.random()<ai.supportProb){
      console.log(enemy.name+' support!!')
    }
    // attack
    else if(ai.canHurt){
      let actions:any[] = []
      if(ai.canAttack){
        for(var w of enemy.weaponIds){
          actions.push({type:'attack', distance: dataItem[w].wdistance, id: w })
        }
      }
      if(ai.canSkill && ai.skillIds){
        for(var w of enemy.skill){
          actions.push({type:'attack', distance: dataItem[w].wdistance, id: w })
        }
      }
    }


    enemy.step = 0
    battleText.push(enemy.name + "的回合！")
    setBattleText(battleText)
    setDataBattle(dataBattle)
    ctrlbattle(false)
  }
  // 从清单初始化获取舞台
  function startwutai(enemylist) {
    let maxdis = Math.max(7, dataPlayer.distance)
    let wutai: any[] = []
    for (var i = 0; i < 3 * maxdis; i++) {
      wutai.push({ 'select': false, 'type': false, 'self': false })
    }
    // console.log(enemylist)
    for (let enindex in enemylist) {
      let enemy = enemylist[enindex]
      if (!enemy) { continue }
      let dis = 0
      for (var weapon of enemy.weaponIds) {
        if (dataItem[weapon].wdistance > dis) {
          dis = dataItem[weapon].wdistance
        }
      }
      let index = Math.min(maxdis - dis, 3) * 3 - 1
      // 容易死循环
      while (wutai[index].type == 'enemy' || wutai[index].type == 'player') {
        index = index - 1
        if (index < 0) { break }
      }
      wutai[index].type = 'enemy'
      wutai[index].id = enindex
      enemylist[enindex].pos = index
    }
    wutai[3 * maxdis - 5].type = 'player'
    wutai[3 * maxdis - 5].id = dataPlayer.name
    dataPlayer.pos = 3 * maxdis - 5
    dataPlayer.weaponindex = 0
    setDataBattle(enemylist)

    // player的pos将会在此set
    setPlayerBattleMenu()
    setWutai(wutai)
  }
  // 战斗菜单选择
  function battleMeanMain(arg) {
    const ac = arg.currentTarget.value
    const wi = dataPlayer.weaponindex
    if (ac == battleIndex) {
      setBattleIndex('')
      setBattleISub(0)
      updateWutaiBySelf(0, '')
    }
    else {
      setBattleIndex(ac)
      if (ac == "attack") {
        setBattleISub(wi)
        updateWutaiBySelf(wi, ac)
      }
      else {
        setBattleISub(0)
        updateWutaiBySelf(0, ac)
      }
    }
  }
  // 战斗二级菜单选择
  function battleMeanSub(arg) {
    const index = arg.currentTarget.value
    setBattleISub(index)
    updateWutaiBySelf(index, battleIndex)
    if (battleIndex == "attack") {
      dataPlayer.weaponindex = index
      setPlayer(dataPlayer)
    }
  }
  // 更新战斗舞台-添加范围指示器
  function updateWutaiBySelf(index, imain) {
    if (!dataPlayer?.menu?.[imain]) {
      setWutai(clearallcolor())
      return
    }
    let meaumain = dataPlayer.menu[imain]
    let s = meaumain[index].dis
    let x = Math.floor(dataPlayer.pos / 3)
    let y = dataPlayer.pos % 3
    let color = 'r'
    let color_ = 'rb'
    let target: any
    if (imain == 'move') {
      color = 'g'
      color_ = 'gb'
      target = false
    }
    else if (imain == 'items' || imain == 'def') {
      color = 'g'
      color_ = 'gb'
      target = "player"
    }
    else {
      target = 'enemy'
    }
    if (s > 0) {
      for (var i = 0; i < wutai.length; i++) {
        if (Math.abs(Math.floor(i / 3) - x) <= s) {
          wutai[i].select = color_
          if (wutai[i].type == target) {
            wutai[i].select = color
          }
        }
        else {
          wutai[i].select = false
        }
        wutai[dataPlayer.pos].select = 'self'
      }
    }
    else if (s == 0) {
      for (var i = 0; i < wutai.length; i++) {
        if (i == dataPlayer.pos) {
          wutai[i].select = color_
          if (wutai[i].type == target) {
            wutai[i].select = color
          }
        }
        else {
          wutai[i].select = false
        }
      }

    }
    else {
      for (var i = 0; i < wutai.length; i++) {
        if (wutai[i].type == "player") {
          wutai[i].select = color_
          if (wutai[i].type == target) {
            wutai[i].select = color
          }
        }
        else {
          wutai[i].select = color_
        }
      }
    }
    wutai[dataPlayer.pos].self = true
    setWutai(wutai)
  }
  // 清理舞台背景的指示器
  function clearallcolor() {
    let wt = wutai
    for (var i = 0; i < wutai.length; i++) {
      wt[i].select = false
      wt[i].self = false
    }
    return wt
  }
  // 计算距离
  function caldistence(id1, id2) {
    const x1 = Math.floor(id1 / 3)
    const x2 = Math.floor(id2 / 3)
    const y1 = id1 % 3
    const y2 = id2 % 3
    return Math.abs(y1 - y2), Math.abs(x2 - x1)
  }
  // 玩家操作
  function playerstep() {
    dataPlayer.step = 1
    setPlayer(dataPlayer)
    ctrlbattle(false)
  }
  // 点击战场图标-玩家操作结束
  function tableSelect(arg: any) {
    const id = arg.currentTarget.getAttribute("data-value")
    // 当二级菜单未被选择的时候
    if (battleIndex == '') {
      if (wutai[id]?.enemy) {
        console.log(wutai[id]?.type, '查看信息')
      }
      else if (wutai[id]?.player) {
        console.log(wutai[id]?.type, '查看玩家信息')
      }
    }
    // 当二级菜单被选择的时候
    else {
      switch (battleIndex) {
        case "move":
          if (wutai[id].type) { console.log('无效移动') }
          else if (wutai[id].select != 'g') { console.log('无效移动') }
          else {
            setBattleIndex('')
            setWutai(clearallcolor())
            setWutai(wutai)
            let wt = wutai
            let dp = dataPlayer
            wt[dp.pos].type = false
            dp.pos = id
            wt[id].type = 'player'
            wt[id].id = dp.name
            setPlayer(dp)
            setWutai(wt)
            playerstep()
          }
          break;
        case "attack":
          if (!wutai[id].type && wutai[id].type != "enemy") { console.log('无效攻击') }
          else if (wutai[id].select != 'r') { console.log('无效攻击') }
          else {
            setBattleIndex('')
            setWutai(clearallcolor())
            setWutai(wutai)
            let enemy = dataBattle[wutai[id].id]
            enemy.hp_ = enemy.hp_ - dataItem[dataPlayer.weaponIds[dataPlayer.weaponindex]].wattack
            if (enemy.hp_ <= 0) {
              setDataBattle(beatenemy())
            }
            setDataBattle(dataBattle)
            setWutai(wutai)
            playerstep()
          }
          break;
      }
    }
  }
  // 击败敌人
  function beatenemy() {
    for (var enemyindex in dataBattle) {
      let enemy = dataBattle[enemyindex]
      if (enemy.hp_ <= 0) {
        wutai[enemy.pos].type = false
        dataBattle[enemyindex] = null
      }
    }
    return dataBattle
  }

  /* -------------------------------------------------------页面和函数的分界线-----------------------------------------------------------*/

  const mapHtml =
    <>
      <div className={styles['pages']} hidden={!(curPage == 0)}>
        {/* 页面上部 */}
        <div className={styles['maptop']}>
          <div className={styles['titlemain']}>{myWeizhi?.name}</div>
          <div className={styles['titlesub']}>{dataWorldMap[myWeizhi?.inId]?.name}</div>
        </div>
        {/* 页面中部 */}
        <div className={styles['mapmid']}>
          {/* 左边 */}
          <div className={styles['midleft']}>
            <div className={styles['leftava']}>状态栏</div>
            <div className={classNames(styles['leftscene'])}>
              <div className={classNames(styles['logomain'], 'flex items-center justify-center')}> <BuildIcon /></div>
            </div>
          </div>
          {/* 右边 */}
          <div className={styles['midright']}>
            <div className={classNames(styles['rightlocal'], 'flex items-center justify-center')}>
              {myWeizhi?.desc}
            </div>


            <div className={classNames(styles['rightpeople'])}>
              <div className={classNames(styles['logomain'], 'flex items-center justify-center')}> <PeopleIcon /></div>
              <div className={classNames(styles['listall'])}>
                {
                  dataMapSet[myWeizhi.mapSetId]?.peopleIds?.map((people, index) => {
                    return (
                      <div className={classNames(styles['listoneout'], 'flex items-center justify-center')}>

                        <button className={classNames(styles['listname'])} onClick={checkPeopleClick} value={index} key={index} >
                          {String(dataPeople[people]?.name)}
                        </button>

                        <div className={styles['listdiv']}>
                          <button hidden={dataPeople[people]?.buyId ? false : true} className={classNames(styles[dataPeople[people]?.buyId ? 'buttonbuycolor' : 'buttondisablecolor'], styles['listbutton'])}>交易</button>
                        </div>

                        <div className={styles['listdiv']}>
                          <button disabled={dataPeople[people]?.enemyId ? false : true} className={classNames(styles[dataPeople[people]?.enemyId ? 'buttonattackcolor' : 'buttondisablecolor'], styles['listbutton'])} onClick={peoplebattle} value={index} key={index}>攻击</button>
                        </div>

                        <div className={styles['listdiv']}>
                          <button disabled={dataPeople[people]?.talkId ? false : true} className={classNames(styles[dataPeople[people]?.talkId ? 'buttontalkcolor' : 'buttondisablecolor'], styles['listbutton'])} onClick={peopleTalk} value={index} key={index}>对话</button>
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className={styles['rightenemy']}>
              <div className={classNames(styles['logomain'], 'flex items-center justify-center')}> <MasterIcon /></div>
              <div className={classNames(styles['listall'])}>
                {
                  dataMapSet[myWeizhi.mapSetId]?.enemyIds?.map((enemy, index) => {
                    return (
                      <div className={classNames(styles['listoneout'], 'flex items-center')} key={index}>

                        <button className={classNames(styles['listnamemaster'])} onClick={checkEnemyClick} value={index} key={index} >
                          {dataEnemyGroup[enemy]?.name}
                        </button>

                        <div className={styles['listdivmaster']}>
                          <button className={classNames(styles['buttonattackcolor'], styles['listbutton'])} onClick={masterattle} value={index} key={index} >攻击</button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        {/* 页面下部 */}
        <div className={styles['mapdown']}>
          <button type="button" disabled={!canDir('top')} className={classNames(styles['buttontop'], styles[(canDir('top') ? 'canable' : 'disable')])} onClick={toDir} value='top'>{dataMap[myWeizhi?.['top']]?.name}</button>
          <button type="button" disabled={!canDir('down')} className={classNames(styles['buttondown'], styles[(canDir('down') ? 'canable' : 'disable')])} onClick={toDir} value='down'> {dataMap[myWeizhi?.['down']]?.name} </button>
          <button type="button" disabled={!canDir('left')} className={classNames(styles['buttonleft'], styles[(canDir('left') ? 'canable' : 'disable')])} onClick={toDir} value='left'> {dataMap[myWeizhi?.['left']]?.name} </button>
          <button type="button" disabled={!canDir('right')} className={classNames(styles['buttonright'], styles[(canDir('right') ? 'canable' : 'disable')])} onClick={toDir} value='right'> {dataMap[myWeizhi?.['right']]?.name} </button>
          <button type="button" className={styles['buttonmid']}>{myWeizhi?.name}</button>
        </div>
      </div>
    </>

  const checkHtml =
    <>
      <div className={styles['pages']} hidden={!(curPage == 1)}>
        {/* 页面上部 */}
        <div className={styles['maptop']}>
          <div className={styles['titlemain']}>{myWeizhi?.name}</div>
          <div className={styles['titlesub']}>{dataWorldMap[myWeizhi?.inId]?.name}</div>
        </div>
        {/* check 详情 */}
        <div className={classNames(styles['checkdesc'])}>
          <div className={classNames(styles['checktitle'])}>
            {dataPeople[checkObj]?.name}
          </div>
          <div className={classNames(styles['checksub'])}>{dataPeople[checkObj]?.desc}</div>
        </div>

        <div className={styles['checkbG']}>
          <button disabled={dataPeople[checkObj]?.talkId ? false : true} className={classNames(styles[dataPeople[checkObj]?.talkId ? 'buttontalkcolor' : 'buttondisablecolor'], styles['checkbutton'])} onClick={startTalk} value={checkObj}>对话</button>
          <button disabled={dataPeople[checkObj]?.enemyId ? false : true} className={classNames(styles[dataPeople[checkObj]?.enemyId ? 'buttonattackcolor' : 'buttondisablecolor'], styles['checkbutton'])}>攻击</button>
          <button hidden={dataPeople[checkObj]?.buyId ? false : true} className={classNames(styles[dataPeople[checkObj]?.buyId ? 'buttonbuycolor' : 'buttondisablecolor'], styles['startTalk'])}>交易</button>
          <button onClick={checkMap} className={classNames(styles['checkbutton'], styles['buttonbackcolor'], styles['checkbuttonback'])}>返回</button>
        </div>
      </div>
    </>

  const checkMasterHtml =
    <>
      <div className={styles['pages']} hidden={!(curPage == 2)}>
        {/* 页面上部 */}
        <div className={styles['maptop']}>
          <div className={styles['titlemain']}>{myWeizhi?.name}</div>
          <div className={styles['titlesub']}>{dataWorldMap[myWeizhi?.inId]?.name}</div>
        </div>
        {/* check 详情 */}
        <div className={classNames(styles['checkmasterdesc'])}>
          <div className={classNames(styles['checktitle'])}>
            {dataEnemyGroup[checkObj]?.name}
          </div>
          <div className={classNames(styles['checksub'])}>{dataEnemyGroup[checkObj]?.desc}</div>
        </div>

        <div className={styles['checkbG']}>

          <button className={classNames(styles['buttonattackcolor'], styles['checkbutton'])} onClick={startmasterbattle} value={checkObj}>攻击</button>

          <button onClick={checkMap} className={classNames(styles['checkbutton'], styles['buttonbackcolor'], styles['checkbuttonback'])}>返回</button>
        </div>
      </div>
    </>

  const talkHtml =
    <>
      <div className={styles['pages']} hidden={!(curPage == 4)}>
        {/* 页面上部 */}
        <div className={styles['maptop']}>
          <div className={styles['titlemain']}>{myWeizhi?.name}</div>
          <div className={styles['titlesub']}>{dataWorldMap[myWeizhi?.inId]?.name}</div>
        </div>
        {/* check 详情 */}
        <div className={classNames(styles['talkmain'])} onClick={nextTalk}>
          <div className={classNames(styles['checktitle'])}>{dataPeople[checkObj]?.name}</div>
          <div className={classNames(styles['talkbG'])}>
            {dataTalk[talk]?.text[talkIndex]}
          </div>
        </div>

        <div className={styles['checkbG']} hidden={(!dataTalk[talk]?.optionIds) || (dataTalk[talk]?.text.length != talkIndex + 1)}>
          {
            dataTalk[talk]?.optionIds?.map((option, index) => {
              return (
                <button
                  className={classNames(styles[(ableOption(option)) ? 'buttonbackcolor' : 'buttondisablecolor'], styles['buttonoption'])}
                  disabled={!ableOption(option)}
                  onClick={optionComplete}
                  value={option}
                >
                  {dataOption[option]?.name}
                </button>
              )
            })
          }
        </div>

      </div>
    </>

  const spaceHtml =
    <>
      {/* <Motion defaultStyle={{left: 0}} style={{left: spring(1000)}}>
      {interpolatingStyle => 
      <div 
      style={interpolatingStyle}
      className={styles["box"]}>
        666
      </div>}
    </Motion> */}

      {/* <div className="container">
      <Motion style={{x: spring(left, presets.wobbly)}}>
        {interpolatingStyle => {
          // debugger
          return (
            <div style={{'left':interpolatingStyle.x}} className={styles['box']}>5555</div>
          )
        }}
      </Motion>
      <button className={classNames(styles['battle-button'],styles['bbuton-color'])} onClick={clickHandler}>run</button>
    </div> */}

    </>

  const battleHtml =
    <>
      {/* 多层包装 无视页面大小垂直居中 */}
      <div className={styles['battle-page']} hidden={!(curPage == 5)}>
        <div className={styles['battle-page-main']} >
          <div className={styles['battle-page-main2']} >
            {/*  页面上方 */}
            <div className={styles['battle-top']}>战斗</div>
            {/*  页面中部*/}
            <div className={styles['battle-mid']}>
              {/*  中部左侧*/}
              <div className={styles['battle-left']}>
                <div className={styles['battle-left-menu']}>
                  {
                    (dataPlayer?.menu && dataPlayer.menu?.[battleIndex]) ?
                      dataPlayer.menu[battleIndex].map((item, index) => {
                        return (
                          <button className={classNames(styles['battle-button-sub'], styles[battleISub == index ? 'bbuton-sub-scolor' : 'bbuton-sub-color'])} onClick={battleMeanSub} value={index}>
                            <div className={styles['battle-button-sub-font']}>{item.name}</div>
                          </button>
                        )
                      }) : ''
                  }
                </div>
              </div>
              {/*  中部右侧*/}
              <div className={styles['battle-right']} hidden={!(battleCtrl?.now == 'player')}>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'move' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='move'>
                  <div className={styles['battle-button-font']}>移动</div>
                </button>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'attack' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='attack'>
                  <div className={styles['battle-button-font']}>攻击</div>
                </button>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'skill' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='skill'>
                  <div className={styles['battle-button-font']}>技能</div>
                </button>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'items' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='items'>
                  <div className={styles['battle-button-font']}>物品</div>
                </button>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'def' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='def'>
                  <div className={styles['battle-button-font']}>防御</div>
                </button>
                <button className={classNames(styles['battle-button'], styles[battleIndex == 'run' ? 'bbuton-scolor' : 'bbuton-color'])} onClick={battleMeanMain} value='run'>
                  <div className={styles['battle-button-font']}>逃跑</div>
                </button>
              </div>
              {/*  中部 主战斗舞台*/}
              <div className={styles['battle-wutai']}>
                <div className={styles['battle-main']}>

                  {
                    wutai.map((ite, ind) => {

                      return (
                        <div
                          className={classNames(styles['battle-main-one'],
                            styles[(ite?.select == 'g') ? 'battle-one-g-color' :
                              (ite?.select == 'r') ? 'battle-one-r-color' :
                                (ite?.select == 'gb') ? 'battle-one-gb-color' :
                                  (ite?.select == 'rb') ? 'battle-one-rb-color' : 'battle-one-color'],
                            styles[ite?.self ? 'battle-one-self' : '']
                          )
                          }
                          onClick={tableSelect}
                          data-value={ind}>
                          <div className={classNames(styles['battle-ceil'],
                            styles[ite?.type == 'enemy' ? 'battle-ceil-enemy' :
                              ite?.type == 'player' ? 'battle-ceil-player' : ''],

                          )}>
                            {
                              [0].map(() => {
                                // console.log(wutai[ind].type)
                                if (ite?.type) {
                                  if (ite?.type == 'enemy') {
                                    let thisenemy = dataBattle[wutai[ind]?.id]
                                    return (
                                      <div>
                                        <meter value={thisenemy.hp_} min="0" max={thisenemy.hp}
                                          low={thisenemy.hp * 0.2}
                                          high={thisenemy.hp * 0.5}
                                          optimum={thisenemy.hp}
                                          className={styles['hp-ceil']}></meter>
                                        <progress value={thisenemy.step}
                                          max={100 * (1 - thisenemy.speed / (thisenemy.speed + 100))}
                                          className={styles['sp-ceil']}></progress>
                                        <div className={styles['enemy-text-ceil']}>{thisenemy.name}</div>
                                      </div>
                                    )
                                  }
                                  else if (ite?.type == 'player') {
                                    let thisplayer = dataPlayer
                                    // console.log(dataPlayer.step / (1 - dataPlayer.speed/(dataPlayer.speed+100)))
                                    return (
                                      <>
                                        <meter value={thisplayer.hp} min="0" max={thisplayer.hpmax} className={styles['hp-ceil']}></meter>
                                        <progress
                                          value={dataPlayer.step}
                                          max={100 * (1 - dataPlayer.speed / (dataPlayer.speed + 100))}
                                          className={styles['sp-ceil']}>
                                        </progress>
                                        <div className={styles['player-text-ceil']}>{thisplayer.name}</div>
                                      </>
                                    )
                                  }
                                  else {
                                    return (
                                      <>
                                      </>
                                    )

                                  }
                                }
                              })
                            }
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
            {/*  页面下方*/}
            <div className={styles['battle-bottom']}>
              <button onClick={checkMap} className={classNames(styles['checkbutton'], styles['buttonbackcolor'], styles['checkbuttonback'])}>返回</button>
              {
                battleText.reverse().map((t, i) => {
                  return (
                    <div className={styles['battle-text']}><div>{t}</div></div>

                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>

  const ALLHtml = <>{mapHtml}{checkHtml}{checkMasterHtml}{talkHtml}{battleHtml}</>
  return (<>
    {
      ALLHtml
    }
  </>)
}

const GG: NextPage<GameModel> = observer(GameView)

GG.getInitialProps = async (ctx) => {
  try {
    const data = await getGameData()
    return data as any
  } catch (err: any) {
    throw err
  }
}

export default GG
