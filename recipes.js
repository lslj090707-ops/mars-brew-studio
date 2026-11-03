window.BREW_DATA = {
 "version": 2,
 "sourceDate": "2026-10-23",
 "beans": [
  {
   "id": "pb",
   "name": "Las Flores 粉波旁",
   "short": "粉波旁",
   "meta": "浅烘 · 厌氧水洗＋热冲击",
   "taste": "热时白花、佛手柑、青柠；温时柑橘酸、青苹果；凉时糖果甜。",
   "country": "哥伦比亚"
  },
  {
   "id": "gesha",
   "name": "Paraíso 92 瑰夏",
   "short": "瑰夏",
   "meta": "浅烘 · 双重厌氧热冲击水洗",
   "taste": "热时花香、佛手柑；温时百香果、荔枝、菠萝；凉时蜂蜜；可可只在底部，不在尾韵发苦。",
   "country": "哥伦比亚"
  },
  {
   "id": "alo",
   "name": "Alo 西达摩 · 中烘",
   "short": "Alo 中烘",
   "meta": "中烘 · Bensa 日晒 74158",
   "taste": "热时蓝莓、紫罗兰；温时葡萄、桃；凉时蜂蜜；巧克力只在底部。",
   "country": "埃塞俄比亚"
  },
  {
   "id": "cm",
   "name": "清迈80",
   "short": "清迈80",
   "meta": "浅烘 · 双重厌氧日晒",
   "taste": "红莓、樱桃在前，牛奶巧克力和奶油感在中段，酒感只在背景；尾韵干净不发干。",
   "country": "泰国"
  },
  {
   "id": "alo-light",
   "name": "Alo Main Station 74158 · 浅烘",
   "short": "Alo 浅烘",
   "country": "埃塞俄比亚",
   "meta": "RESTART COFFEE · 西达摩班莎 · 日晒 · 浅烘",
   "taste": "豆袋标注：深色花香、成熟蜜桃、草莓酱、蜂蜜。你烘焙当天冲的那杯有花果香，但分不出具体类型。",
   "tasteTitle": "深色花香，成熟蜜桃与草莓酱。",
   "tasteStatus": "豆袋标签的描述 · 烘焙当天那杯有花果香，但分不出类型",
   "roastDate": "2026-10-29",
   "labelInfo": "74158 · 烘焙日期 2026-10-29 · Ag 90（测法不明）",
   "source": {
    "kind": "user-bag-photo",
    "filename": "IMG_10770BC4-5342-4EFC-99CE-F3E6DC9BB7E2.jpeg",
    "libraryFileId": "libfile_3ef067d000d48191a9635849139ce993"
   },
   "notes": "烘豆人建议养豆 7 至 14 天（11-05 至 11-12）。Ag 90 是烘豆人给的数值，没有说明是整豆还是研磨后测的，所以只记录，不拿它换算研磨。",
   "restDays": [
    7,
    14
   ]
  }
 ],
 "modes": [
  {
   "id": "hot",
   "name": "混合热冲",
   "detail": "使用开关阀"
  },
  {
   "id": "ice",
   "name": "混合冰冲",
   "detail": "使用开关阀＋冰"
  },
  {
   "id": "pure",
   "name": "纯手冲·热",
   "detail": "全程开阀"
  },
  {
   "id": "pice",
   "name": "纯手冲·冰",
   "detail": "全程开阀＋冰"
  },
  {
   "id": "cmp-sw",
   "name": "Switch 03 对照",
   "detail": "Switch 03 对 三旋空山文",
   "hidden": true
  },
  {
   "id": "cmp-qt",
   "name": "三旋空山文 首杯",
   "detail": "Switch 03 对 三旋空山文",
   "hidden": true
  },
  {
   "id": "flat",
   "name": "三旋空山文 v2",
   "detail": "可选探索 · ZP6 4.0",
   "hidden": true
  }
 ],
 "recipes": [
  {
   "id": "pb-hot",
   "bean": "pb",
   "mode": "hot",
   "dose": 18,
   "water": 288,
   "ice": 0,
   "grind": 4.4,
   "window": [
    165,
    185
   ],
   "cut": null,
   "structure": "先滴后泡：开阀注一半，0:45 关阀注另一半，2:00 开阀",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 1-2 秒",
     "checkpoint": null
    },
    {
     "at": 20,
     "until": 40,
     "valve": "开",
     "water": 144,
     "text": "继续绕圈注水，0:40 前注完",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 75,
     "valve": "关",
     "water": 288,
     "text": "关阀，对准中心注水，1:15 前注完",
     "checkpoint": null
    },
    {
     "at": 120,
     "until": null,
     "valve": "开",
     "water": null,
     "text": "拿开小碟，开阀放流",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.8
  },
  {
   "id": "pb-ice",
   "bean": "pb",
   "mode": "ice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.8,
   "window": [
    150,
    165
   ],
   "cut": null,
   "structure": "先滴后泡（冰冲）：0:45 关阀，2:00 开阀",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 50,
     "text": "绕圈注水，轻摇 1-2 秒",
     "checkpoint": null
    },
    {
     "at": 20,
     "until": 35,
     "valve": "开",
     "water": 96,
     "text": "绕圈注水，0:35 前注完",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 65,
     "valve": "关",
     "water": 190,
     "text": "关阀，对准中心注水，1:05 前注完",
     "checkpoint": null
    },
    {
     "at": 120,
     "until": null,
     "valve": "开",
     "water": null,
     "text": "开阀放流",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.2
  },
  {
   "id": "pb-pure",
   "bean": "pb",
   "mode": "pure",
   "dose": 18,
   "water": 288,
   "ice": 0,
   "grind": 4.2,
   "window": [
    145,
    165
   ],
   "cut": null,
   "structure": "阀门全程开，四段滴滤",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 1-2 秒",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 144,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 75,
     "until": 90,
     "valve": "开",
     "water": 216,
     "text": "绕圈注水，1:30 前注完",
     "checkpoint": null
    },
    {
     "at": 105,
     "until": 120,
     "valve": "开",
     "water": 288,
     "text": "中心小圈低位注水，2:00 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.6
  },
  {
   "id": "pb-pice",
   "bean": "pb",
   "mode": "pice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.6,
   "window": [
    105,
    125
   ],
   "cut": null,
   "structure": "阀门全程开，闷蒸 40 秒后两段滴滤，直接滴在冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 50,
     "text": "绕圈注水，轻摇 1-2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 190,
     "text": "中心小圈低位注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "m",
    "cups": 1
   },
   "dripper": "sw",
   "baseline": 4,
   "cup": {
    "title": "酸甜平衡，有果汁感。",
    "desc": "10-29 这杯冰冲：酸甜平衡，有果汁感，苦很弱。参数按 App 默认值冲，你没有逐项复述，需要同参数再冲一杯确认。",
    "status": "来自你的真实反馈 · 1 杯 · 日期为推断"
   },
   "nextTest": "同参数再冲一杯，确认能复现：20 g / 190 g / 冰 120 g，ZP6 3.6。"
  },
  {
   "id": "gesha-hot",
   "bean": "gesha",
   "mode": "hot",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.4,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "关阀闷蒸 30 秒，再两段滴滤",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 54,
     "text": "注水，轻摇 2 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 55,
     "valve": "开",
     "water": 180,
     "text": "拿开小碟，开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 297,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.8
  },
  {
   "id": "gesha-ice",
   "bean": "gesha",
   "mode": "ice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.8,
   "window": [
    105,
    125
   ],
   "cut": null,
   "structure": "关阀闷蒸 40 秒，再两段滴滤（冰冲）",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 60,
     "text": "注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 190,
     "text": "绕圈注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.2
  },
  {
   "id": "gesha-pure",
   "bean": "gesha",
   "mode": "pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.2,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "阀门全程开，三段滴滤",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 54,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 180,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 297,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": true,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "归档条件 · 未逐杯测温",
    "note": "沿用原方案的当地刚沸水条件。18g / 297g / 4.2 已有两杯正面反馈，但这两杯都没有独立的精确水温记录。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "m",
    "cups": 2
   },
   "dripper": "sw",
   "baseline": 4.6,
   "cup": {
    "title": "香气、甜感，还有果汁感。",
    "desc": "ZP6 4.2 已有两杯正面：10-23 约 2:10，甜感明显、尾苦很弱、香气更明显、有果汁感；10-27 天堂瑰夏香气，果汁感显著，热时甜感明确。具体花香和水果的种类仍在辨认。",
    "status": "来自你的真实反馈 · 2 杯 · 10-27 的日期为推断"
   },
   "nextTest": "同参数复冲 18 g / 297 g，ZP6 4.2，沸水，阀全开。计时记下粉面干点，分热、温、凉三段品尝，写下花香和水果的具体类型。不改任何参数。"
  },
  {
   "id": "gesha-pice",
   "bean": "gesha",
   "mode": "pice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.6,
   "window": [
    105,
    125
   ],
   "cut": null,
   "structure": "阀门全程开，闷蒸 40 秒后两段滴滤，直接滴在冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 60,
     "text": "绕圈注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 190,
     "text": "绕圈注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4
  },
  {
   "id": "alo-hot",
   "bean": "alo",
   "mode": "hot",
   "dose": 18,
   "water": 315,
   "ice": 0,
   "grind": 4.8,
   "window": [
    110,
    130
   ],
   "cut": null,
   "structure": "关阀闷蒸 30 秒，再一段连续注水",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 54,
     "text": "注水，轻摇 1 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 60,
     "valve": "开",
     "water": 180,
     "text": "拿开小碟，开阀，中心小圈连续注水，壶嘴放低",
     "checkpoint": "约 1:00 读数到这里"
    },
    {
     "at": 60,
     "until": 85,
     "valve": "开",
     "water": 315,
     "text": "不停，继续注水，1:25 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "90",
    "unit": "°C",
    "detail": "X-pro 可精确设定 90°C，仍需实际出水确认",
    "status": "新建议 · 尚未实测",
    "note": "沿用本次对话提出的 90°C 混合热冲对照起点，尚未收到这套方案的实测反馈。没有测温设备时，不按固定等待秒数假定已经到 90°C。",
    "source": "2026-10-26 本对话，Alo 混合热冲低温对照建议"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 5.2,
   "startNote": "这是和 85°C 纯热那杯对照的混合热冲建议，还没有冲过。窗口 1:50 至 2:10 只是粗估，不按它截流。",
   "nextTest": "先做 85°C 不加冰的对照，之后再试这一套 90°C 混合热冲。"
  },
  {
   "id": "alo-ice",
   "bean": "alo",
   "mode": "ice",
   "dose": 20,
   "water": 200,
   "ice": 130,
   "grind": 4.2,
   "window": [
    100,
    120
   ],
   "cut": null,
   "structure": "关阀闷蒸 40 秒，再一段连续注水（冰冲）",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 60,
     "text": "注水，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "开阀，中心连续注水",
     "checkpoint": "约 0:55 读数到这里"
    },
    {
     "at": 55,
     "until": 75,
     "valve": "开",
     "water": 200,
     "text": "不停，继续注水，1:15 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 纯手冲热饮约 85°C 冲完再加冰的反馈，不等于本套减少热水的冰冲已验证。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.6
  },
  {
   "id": "alo-pure",
   "bean": "alo",
   "mode": "pure",
   "dose": 18,
   "water": 315,
   "ice": 0,
   "grind": 4.6,
   "window": [
    165,
    170
   ],
   "cut": null,
   "structure": "阀门全程开，闷蒸后一段连续注水",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 54,
     "text": "注水，轻摇 1 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 65,
     "valve": "开",
     "water": 180,
     "text": "中心小圈连续注水",
     "checkpoint": "约 1:05 读数到这里"
    },
    {
     "at": 65,
     "until": 90,
     "valve": "开",
     "water": 315,
     "text": "不停，继续注水，1:30 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "85",
    "unit": "°C",
    "detail": "约值，沿用这次试冲条件。X-pro 现在可以精确设定",
    "status": "用户试冲条件 · 热饮待调整",
    "note": "你这杯约用 85°C：热时醇厚、入口甜，随后苦，酸和花果香弱。冲完另加约 100g 冰后，花果香、酸和甜更明确，苦感很弱。冰的融化量未知，尚不能分开判断降温与稀释的作用。",
    "source": "2026-10-26 本对话，Mars 对 Alo 纯手冲热饮及加冰后的反馈"
   },
   "feedbackNote": "约 85°C 已试冲，热饮仍不满意；另加冰后改善。保留 4.6 作对照，不把加冰结果认定为热冲配方已验证。",
   "status": {
    "kind": "m",
    "cups": 1
   },
   "dripper": "sw",
   "baseline": 5,
   "windowNote": "原卡窗口 1:55 至 2:15 已作废：这杯 2:30 还没流完，你预计 2:45 至 2:50。",
   "cup": {
    "title": "加冰以后，花果香才清楚。",
    "desc": "10-26 约 85°C，2:30 还没流完：醇厚，入口甜，后面苦，酸弱，没有明确花果香。另加约 100 g 冰后：甜明显，苦基本没有，酸回来，花果香更明显。冰同时改变了温度和浓度，不能当成单变量结论。",
    "status": "来自你的真实反馈 · 1 杯 · 热饮待调整"
   },
   "nextTest": "水温设 85°C，不加冰，让它自然放凉，作为加冰那杯的对照。"
  },
  {
   "id": "alo-pice",
   "bean": "alo",
   "mode": "pice",
   "dose": 20,
   "water": 200,
   "ice": 130,
   "grind": 4,
   "window": [
    100,
    120
   ],
   "cut": null,
   "structure": "阀门全程开，闷蒸 40 秒后一段连续注水，直接滴在冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 60,
     "text": "注水，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "中心小圈连续注水，壶嘴放低",
     "checkpoint": "约 0:55 读数到这里"
    },
    {
     "at": 55,
     "until": 75,
     "valve": "开",
     "water": 200,
     "text": "不停，继续注水，1:15 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 纯手冲热饮约 85°C 冲完再加冰的反馈，不等于本套减少热水的冰冲已验证。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.4
  },
  {
   "id": "cm-hot",
   "bean": "cm",
   "mode": "hot",
   "dose": 18,
   "water": 288,
   "ice": 0,
   "grind": 4.6,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "关阀闷蒸 30 秒，再两段滴滤，2:50 截止",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 54,
     "text": "注水，轻摇 2 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 55,
     "valve": "开",
     "water": 171,
     "text": "拿开小碟，开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 288,
     "text": "对准中心低位注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 5
  },
  {
   "id": "cm-ice",
   "bean": "cm",
   "mode": "ice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 4,
   "window": [
    105,
    125
   ],
   "cut": null,
   "structure": "关阀闷蒸 40 秒，再两段滴滤，2:35 截止（冰冲）",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 60,
     "text": "注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 190,
     "text": "对准中心低位注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.4
  },
  {
   "id": "cm-pure",
   "bean": "cm",
   "mode": "pure",
   "dose": 18,
   "water": 288,
   "ice": 0,
   "grind": 4.4,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "阀门全程开，三段滴滤，2:50 截止",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 54,
     "text": "注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 171,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 288,
     "text": "对准中心低位注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.8
  },
  {
   "id": "cm-pice",
   "bean": "cm",
   "mode": "pice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.8,
   "window": [
    105,
    125
   ],
   "cut": null,
   "structure": "阀门全程开，闷蒸 40 秒后两段滴滤，2:35 截止，直接滴在冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 60,
     "text": "注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 120,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 190,
     "text": "对准中心低位注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "历史起点 · 温度待验证",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "status": {
    "kind": "u",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": 4.2
  },
  {
   "id": "alo-light-hot",
   "bean": "alo-light",
   "mode": "hot",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.8,
   "window": [
    140,
    200
   ],
   "cut": null,
   "structure": "关阀闷蒸，0:45 开阀，闷蒸 45 秒后两段滴滤",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 54,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 75,
     "valve": "开",
     "water": 180,
     "text": "开阀，低位绕圈注水，1:15 前注完",
     "checkpoint": null
    },
    {
     "at": 85,
     "until": 110,
     "valve": "开",
     "water": 297,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:50 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "startNote": "为 Alo 浅焙新批次设计的暂定方案，还没有冲过。先等 11-05 的纯热复冲，再决定是否试这一套。",
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "新豆建议 · 尚未实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "sw"
  },
  {
   "id": "alo-light-ice",
   "bean": "alo-light",
   "mode": "ice",
   "dose": 20,
   "water": 200,
   "ice": 120,
   "grind": 4.2,
   "window": [
    125,
    185
   ],
   "cut": null,
   "structure": "关阀闷蒸，0:45 开阀，闷蒸 45 秒后两段滴滤，直接滴在分享壶冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 60,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 65,
     "valve": "开",
     "water": 130,
     "text": "开阀，低位绕圈注水，1:05 前注完",
     "checkpoint": null
    },
    {
     "at": 75,
     "until": 95,
     "valve": "开",
     "water": 200,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "startNote": "为 Alo 浅焙新批次设计的暂定方案，还没有冲过。先等 11-05 的纯热复冲，再决定是否试这一套。",
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "新豆建议 · 尚未实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "sw"
  },
  {
   "id": "alo-light-pure",
   "bean": "alo-light",
   "mode": "pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.6,
   "window": [
    140,
    200
   ],
   "cut": null,
   "structure": "全程开阀，闷蒸 45 秒后两段滴滤",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 54,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 75,
     "valve": "开",
     "water": 180,
     "text": "低位绕圈注水，1:15 前注完",
     "checkpoint": null
    },
    {
     "at": 85,
     "until": 110,
     "valve": "开",
     "water": 297,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:50 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "startNote": "烘焙当天冲过一杯：约 3:17 才看不到积水，甜但涩。不要只怪新鲜度，也别马上改研磨。先养豆，第 7 天用同参数复冲。",
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "新豆建议 · 尚未实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "status": {
    "kind": "m",
    "cups": 1
   },
   "dripper": "sw",
   "cup": {
    "title": "甜，也涩。",
    "desc": "10-29 烘焙当天（养豆第 0 天）：甜感明显，涩感明显，发干，有花果香但分不出类型。计划养到第 7 天后用同参数复冲。",
    "status": "来自你的真实反馈 · 1 杯 · 只在烘焙当天冲过"
   },
   "nextTest": "11-05 至 11-12 之间（养豆第 7 天起）用同参数复冲：18 g / 297 g，ZP6 4.6，沸水，阀全开。若仍然干涩，下一杯只把 4.6 改成 4.8。"
  },
  {
   "id": "alo-light-pice",
   "bean": "alo-light",
   "mode": "pice",
   "dose": 20,
   "water": 200,
   "ice": 120,
   "grind": 4,
   "window": [
    125,
    185
   ],
   "cut": null,
   "structure": "全程开阀，闷蒸 45 秒后两段滴滤，直接滴在分享壶冰上",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 60,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 65,
     "valve": "开",
     "water": 130,
     "text": "低位绕圈注水，1:05 前注完",
     "checkpoint": null
    },
    {
     "at": 75,
     "until": 95,
     "valve": "开",
     "water": 200,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "startNote": "为 Alo 浅焙新批次设计的暂定方案，还没有冲过。先等 11-05 的纯热复冲，再决定是否试这一套。",
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "新豆建议 · 尚未实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "sw"
  },
  {
   "id": "gesha-pure-qt",
   "bean": "gesha",
   "mode": "pure",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.2,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "对照 · 已冲一次",
    "note": "两杯用同一壶沸水，水温完全相同。水温沿用瑰夏纯热的条件，没有单独测过。",
    "source": "2026-11-03 Switch 03 对三旋空山文计划"
   },
   "status": {
    "kind": "m",
    "cups": 1
   },
   "dripper": "qt",
   "baseline": null,
   "nextTest": "这杯已经冲过一次（11-03，1:30）。可选探索：下一杯用「三旋空山文 v2」，只改 ZP6 4.2 改成 4.0。想保持原样也完全可以。",
   "noWindow": true,
   "startNote": "Switch 03 对三旋空山文：瑰夏 15 g / 248 g（1:16.5），ZP6 4.2，沸水，除了滤杯（Switch 03 和三旋空山文）与滤纸（V60-03 和 NANO 185）外，两杯完全一样。步骤是把瑰夏纯热的累计比例换算到 15 g（推断）。两杯都记下真实干点，不预设估计。 11-03 已冲一杯：干点 1:30，好喝，花果香清晰。分段注水不会溢出，只有关阀全浸泡才要看杯容量（你已确认）。",
   "cup": {
    "title": "清晰，平衡，甜感略低。",
    "desc": "11-03 15:50：干点 1:30。花果香比 Hario Switch 03 更清晰，酸质更明确，整体平衡，不薄。甜感比 Switch 03 基线略低。这是一杯好咖啡。",
    "status": "来自你的真实反馈 · 1 杯 · 对照"
   }
  },
  {
   "id": "alo-hot-qt",
   "bean": "alo",
   "mode": "hot",
   "dose": 15,
   "water": 262,
   "ice": 0,
   "grind": 4.8,
   "window": [
    110,
    130
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "90",
    "unit": "°C",
    "detail": "X-pro 可精确设定 90°C，仍需实际出水确认",
    "status": "推断 · 未在三旋空山文实测",
    "note": "沿用本次对话提出的 90°C 混合热冲对照起点，尚未收到这套方案的实测反馈。没有测温设备时，不按固定等待秒数假定已经到 90°C。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-26 本对话，Alo 混合热冲低温对照建议"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 30 秒，再一段连续注水；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 1 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 60,
     "valve": "开",
     "water": 150,
     "text": "拿开小碟，开阀，中心小圈连续注水，壶嘴放低",
     "checkpoint": "约 1:00 读数到这里"
    },
    {
     "at": 60,
     "until": 85,
     "valve": "开",
     "water": 262,
     "text": "不停，继续注水，1:25 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合热冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。",
   "nextTest": "这套还没在三旋空山文冲过。先按起点冲一杯，记下干点和评分，再改一项。"
  },
  {
   "id": "alo-ice-qt",
   "bean": "alo",
   "mode": "ice",
   "dose": 15,
   "water": 150,
   "ice": 98,
   "grind": 4.2,
   "window": [
    100,
    120
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 纯手冲热饮约 85°C 冲完再加冰的反馈，不等于本套减少热水的冰冲已验证。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 40 秒，再一段连续注水（冰冲）；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 90,
     "text": "开阀，中心连续注水",
     "checkpoint": "约 0:55 读数到这里"
    },
    {
     "at": 55,
     "until": 75,
     "valve": "开",
     "water": 150,
     "text": "不停，继续注水，1:15 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合冰冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "alo-pure-qt",
   "bean": "alo",
   "mode": "pure",
   "dose": 15,
   "water": 262,
   "ice": 0,
   "grind": 4.6,
   "window": [
    165,
    170
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "85",
    "unit": "°C",
    "detail": "约值，沿用这次试冲条件。X-pro 现在可以精确设定",
    "status": "推断 · 未在三旋空山文实测",
    "note": "你这杯约用 85°C：热时醇厚、入口甜，随后苦，酸和花果香弱。冲完另加约 100g 冰后，花果香、酸和甜更明确，苦感很弱。冰的融化量未知，尚不能分开判断降温与稀释的作用。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-26 本对话，Mars 对 Alo 纯手冲热饮及加冰后的反馈"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 262,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·热」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。",
   "nextTest": "这套还没在三旋空山文冲过。先按起点冲一杯，记下干点和评分，再改一项。"
  },
  {
   "id": "alo-pice-qt",
   "bean": "alo",
   "mode": "pice",
   "dose": 15,
   "water": 150,
   "ice": 98,
   "grind": 4,
   "window": [
    100,
    120
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 纯手冲热饮约 85°C 冲完再加冰的反馈，不等于本套减少热水的冰冲已验证。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 98,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·冰」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "alo-light-hot-qt",
   "bean": "alo-light",
   "mode": "hot",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.8,
   "window": [
    140,
    200
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸，0:45 开阀，闷蒸 45 秒后两段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 75,
     "valve": "开",
     "water": 150,
     "text": "开阀，低位绕圈注水，1:15 前注完",
     "checkpoint": null
    },
    {
     "at": 85,
     "until": 110,
     "valve": "开",
     "water": 248,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:50 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合热冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "alo-light-ice-qt",
   "bean": "alo-light",
   "mode": "ice",
   "dose": 15,
   "water": 150,
   "ice": 90,
   "grind": 4.2,
   "window": [
    125,
    185
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸，0:45 开阀，闷蒸 45 秒后两段滴滤，直接滴在分享壶冰上；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "绕圈浸湿全部咖啡粉，轻摇 1 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 65,
     "valve": "开",
     "water": 98,
     "text": "开阀，低位绕圈注水，1:05 前注完",
     "checkpoint": null
    },
    {
     "at": 75,
     "until": 95,
     "valve": "开",
     "water": 150,
     "text": "继续低位绕圈注水，覆盖大部分粉面，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合冰冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "alo-light-pure-qt",
   "bean": "alo-light",
   "mode": "pure",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.6,
   "window": [
    140,
    200
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·热」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。",
   "nextTest": "这套还没在三旋空山文冲过。先按起点冲一杯，记下干点和评分，再改一项。"
  },
  {
   "id": "alo-light-pice-qt",
   "bean": "alo-light",
   "mode": "pice",
   "dose": 15,
   "water": 150,
   "ice": 90,
   "grind": 4,
   "window": [
    125,
    185
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "这批标签为浅烘，先使用当地刚沸水作为对照起点。充分预热 Hario Switch 03；与中烘 Alo 的约 85°C 试冲分开，不自动继承其加冰后的反馈。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "2026-10-29 新批次试冲设计；温度与研磨为待验证建议，非生产者指定配方。"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 98,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·冰」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "cm-hot-qt",
   "bean": "cm",
   "mode": "hot",
   "dose": 15,
   "water": 240,
   "ice": 0,
   "grind": 4.6,
   "window": [
    120,
    140
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 30 秒，再两段滴滤，2:50 截止；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 2 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 55,
     "valve": "开",
     "water": 142,
     "text": "拿开小碟，开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 240,
     "text": "对准中心低位注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合热冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "cm-ice-qt",
   "bean": "cm",
   "mode": "ice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 4,
   "window": [
    105,
    125
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 40 秒，再两段滴滤，2:35 截止（冰冲）；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 90,
     "text": "开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 142,
     "text": "对准中心低位注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合冰冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "cm-pure-qt",
   "bean": "cm",
   "mode": "pure",
   "dose": 15,
   "water": 240,
   "ice": 0,
   "grind": 4.4,
   "window": [
    120,
    140
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 240,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·热」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "cm-pice-qt",
   "bean": "cm",
   "mode": "pice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 3.8,
   "window": [
    105,
    125
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 94,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 142,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·冰」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "gesha-hot-qt",
   "bean": "gesha",
   "mode": "hot",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.4,
   "window": [
    120,
    140
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 30 秒，再两段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 2 秒，小碟盖住杯口闷蒸",
     "checkpoint": null
    },
    {
     "at": 30,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "拿开小碟，开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合热冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "gesha-ice-qt",
   "bean": "gesha",
   "mode": "ice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 3.8,
   "window": [
    105,
    125
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。关阀闷蒸 40 秒，再两段滴滤（冰冲）；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "关",
     "water": 45,
     "text": "注水，轻摇 2 秒，闷蒸",
     "checkpoint": null
    },
    {
     "at": 40,
     "until": 55,
     "valve": "开",
     "water": 90,
     "text": "开阀，绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 65,
     "until": 80,
     "valve": "开",
     "water": 142,
     "text": "绕圈注水，1:20 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合冰冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "gesha-pice-qt",
   "bean": "gesha",
   "mode": "pice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 3.6,
   "window": [
    105,
    125
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 94,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 142,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·冰」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "pb-hot-qt",
   "bean": "pb",
   "mode": "hot",
   "dose": 15,
   "water": 240,
   "ice": 0,
   "grind": 4.4,
   "window": [
    165,
    185
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。先滴后泡：开阀注一半，0:45 关阀注另一半，2:00 开阀；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 38,
     "text": "绕圈注水，轻摇 1-2 秒",
     "checkpoint": null
    },
    {
     "at": 20,
     "until": 40,
     "valve": "开",
     "water": 120,
     "text": "继续绕圈注水，0:40 前注完",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 75,
     "valve": "关",
     "water": 240,
     "text": "关阀，对准中心注水，1:15 前注完",
     "checkpoint": null
    },
    {
     "at": 120,
     "until": null,
     "valve": "开",
     "water": null,
     "text": "拿开小碟，开阀放流",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合热冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "pb-ice-qt",
   "bean": "pb",
   "mode": "ice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 3.8,
   "window": [
    150,
    165
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "推断，三旋空山文开关底座。先滴后泡（冰冲）：0:45 关阀，2:00 开阀；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 38,
     "text": "绕圈注水，轻摇 1-2 秒",
     "checkpoint": null
    },
    {
     "at": 20,
     "until": 35,
     "valve": "开",
     "water": 72,
     "text": "绕圈注水，0:35 前注完",
     "checkpoint": null
    },
    {
     "at": 45,
     "until": 65,
     "valve": "关",
     "water": 142,
     "text": "关阀，对准中心注水，1:05 前注完",
     "checkpoint": null
    },
    {
     "at": 120,
     "until": null,
     "valve": "开",
     "water": null,
     "text": "开阀放流",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「混合冰冲」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "pb-pure-qt",
   "bean": "pb",
   "mode": "pure",
   "dose": 15,
   "water": 240,
   "ice": 0,
   "grind": 4.2,
   "window": [
    145,
    165
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 240,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·热」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。"
  },
  {
   "id": "pb-pice-qt",
   "bean": "pb",
   "mode": "pice",
   "dose": 15,
   "water": 142,
   "ice": 90,
   "grind": 3.6,
   "window": [
    105,
    125
   ],
   "cut": null,
   "verified": false,
   "baseline": null,
   "dripper": "qt",
   "noWindow": true,
   "status": {
    "kind": "u",
    "cups": 0
   },
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "推断 · 未在三旋空山文实测",
    "note": "原手册统一使用当地刚沸水。这是该方案的归档起点，不代表已验证为这支豆、这套冲法的最佳水温。 水温沿用同豆同冲法的 Hario Switch 03 方案，未在清庭三旋空山文实测（推断）。",
    "source": "Claude 迁移：migration-03-latest-manual.md，2026-10-21，第三节；migration-03-brew-card.html"
   },
   "structure": "阀门全程开（推断，三旋空山文开关底座），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 94,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 142,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "startNote": "从同豆 Hario Switch 03「纯手冲·冰」方案按粉量缩到 15 g（粉水比不变）得到的三旋空山文起点（推断）。清庭三旋空山文 280 ml + NANO 莱赛尔高流速 185 波浪滤纸。未在三旋空山文实测。一次只改一项。",
   "nextTest": "这套还没在三旋空山文冲过。先按起点冲一杯，记下干点和评分，再改一项。"
  },
  {
   "id": "gesha-cmp-sw",
   "bean": "gesha",
   "mode": "cmp-sw",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.2,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "阀门全程开，三段滴滤；Hario V60-03 滤纸，360 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "对照 · 与瑰夏纯热同条件",
    "note": "两杯用同一壶沸水，水温完全相同。水温沿用瑰夏纯热的条件，没有单独测过。",
    "source": "2026-11-03 Switch 03 对三旋空山文计划"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "sw",
   "baseline": null,
   "nextTest": "两杯各冲一次，参数完全相同，记下真实干点和评分，再看 Switch 03 对三旋空山文的对照表。",
   "noWindow": true,
   "startNote": "Switch 03 对三旋空山文：瑰夏 15 g / 248 g（1:16.5），ZP6 4.2，沸水，除了滤杯（Switch 03 和三旋空山文）与滤纸（V60-03 和 NANO 185）外，两杯完全一样。步骤是把瑰夏纯热的累计比例换算到 15 g（推断）。两杯都记下真实干点，不预设估计。"
  },
  {
   "id": "gesha-cmp-qt",
   "bean": "gesha",
   "mode": "cmp-qt",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.2,
   "window": [
    120,
    140
   ],
   "cut": null,
   "structure": "阀门全程开（推断，三旋空山文的开关底座按同样方式使用），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "对照 · 已冲一次",
    "note": "两杯用同一壶沸水，水温完全相同。水温沿用瑰夏纯热的条件，没有单独测过。",
    "source": "2026-11-03 Switch 03 对三旋空山文计划"
   },
   "status": {
    "kind": "m",
    "cups": 1
   },
   "dripper": "qt",
   "baseline": null,
   "nextTest": "这杯已经冲过一次（11-03，1:30）。可选探索：下一杯用「三旋空山文 v2」，只改 ZP6 4.2 改成 4.0。想保持原样也完全可以。",
   "noWindow": true,
   "startNote": "Switch 03 对三旋空山文：瑰夏 15 g / 248 g（1:16.5），ZP6 4.2，沸水，除了滤杯（Switch 03 和三旋空山文）与滤纸（V60-03 和 NANO 185）外，两杯完全一样。步骤是把瑰夏纯热的累计比例换算到 15 g（推断）。两杯都记下真实干点，不预设估计。 11-03 已冲一杯：干点 1:30，好喝，花果香清晰。分段注水不会溢出，只有关阀全浸泡才要看杯容量（你已确认）。",
   "cup": {
    "title": "清晰，平衡，甜感略低。",
    "desc": "11-03 15:50：干点 1:30。花果香比 Hario Switch 03 更清晰，酸质更明确，整体平衡，不薄。甜感比 Switch 03 基线略低。这是一杯好咖啡。",
    "status": "来自你的真实反馈 · 1 杯 · 对照"
   }
  },
  {
   "id": "gesha-flat-v2",
   "bean": "gesha",
   "mode": "flat",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4,
   "window": [
    95,
    110
   ],
   "cut": null,
   "structure": "阀门全程开（推断，三旋空山文的开关底座按同样方式使用），三段滴滤；NANO 莱赛尔高流速 185 波浪滤纸，280 ml",
   "actions": [
    {
     "at": 0,
     "until": 10,
     "valve": "开",
     "water": 45,
     "text": "绕圈注水，轻摇 2 秒",
     "checkpoint": null
    },
    {
     "at": 35,
     "until": 55,
     "valve": "开",
     "water": 150,
     "text": "绕圈注水，0:55 前注完",
     "checkpoint": null
    },
    {
     "at": 70,
     "until": 95,
     "valve": "开",
     "water": 248,
     "text": "绕圈注水，1:35 前注完",
     "checkpoint": null
    }
   ],
   "verified": false,
   "temperature": {
    "value": "刚沸",
    "unit": "",
    "detail": "昆明沸点约 93°C，X-pro 最高约 93°C，以实际沸点为准",
    "status": "沿用 11-03 那杯 · 水温不是这次的变量",
    "note": "水温和上一杯完全一样。研究显示，在相同浓度和萃取率下，87 到 93°C 的差别几乎尝不出来（UC Davis 2020），所以 93°C 上限不是短板。预热三旋空山文和 X-pro 壶嘴，和上一杯保持一致。",
    "source": "2026-11-03 三旋空山文笔记"
   },
   "status": {
    "kind": "p",
    "cups": 0
   },
   "dripper": "qt",
   "baseline": null,
   "nextTest": "可选探索：只把 ZP6 从 4.2 改成 4.0，其余和 11-03 那杯完全一样。想看清差别，可以先后冲两杯（4.2 和 4.0），蒙眼，各在 60°C 和 40°C 尝。如果 4.2 已经让你满意，就不用动。",
   "startNote": "可选探索，不是纠错。上一杯（ZP6 4.2）你觉得很好：酸甜苦平衡，花果香更清晰，只是甜感比 Switch 略低。这一杯只改一项：ZP6 4.2 改成 4.0。粉水、注水节奏、水温、滤纸都不动。预期干点 1:35 到 1:50（推断）。观察：甜感有没有升，花果香的清晰度有没有保住。",
   "windowNote": "这个窗口是我的推断：比上一杯（1:30）晚 5 到 20 秒。如果你觉得上一杯已经很好，保持 4.2 也完全可以。"
  }
 ],
 "temperatureUpdated": "2026-11-03",
 "updatedDate": "2026-11-03",
 "history": [
  {
   "id": "h-gesha-cmp-qt-1103",
   "recipe": "gesha-cmp-qt",
   "dose": 15,
   "water": 248,
   "ice": 0,
   "grind": 4.2,
   "seconds": 90,
   "date": "2026-11-03T15:50:00+08:00",
   "dateNote": "时间约 15:50",
   "temp": "沸水",
   "dripper": "qt",
   "tags": [
    "香气明显",
    "酸质清晰",
    "整体平衡",
    "甜感略低"
   ],
   "note": "三旋空山文首杯。花果香比 Hario Switch 03 更清晰，酸质更明确，不薄，整体更平衡，甜感比 Switch 03 基线略低。Switch 03 有时偏厚重。第三段比计划早结束，每段之间粉床都滤空了，所以干点由粉床阻力决定，不是注水节奏。"
  },
  {
   "id": "h-alo-light-1029",
   "recipe": "alo-light-pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.6,
   "seconds": 197,
   "date": "2026-10-29T22:09:00+08:00",
   "dateNote": "日期为推断",
   "temp": "沸水",
   "tags": [
    "甜感好",
    "发干发涩"
   ],
   "note": "烘焙当天（养豆第 0 天）。约 3:17 才看不到积水。甜感明显，涩感明显，发干，有花果香但分不出类型。"
  },
  {
   "id": "h-pb-pice-1029",
   "recipe": "pb-pice",
   "dose": 20,
   "water": 190,
   "ice": 120,
   "grind": 3.6,
   "seconds": null,
   "timeText": "未计时",
   "date": "2026-10-29T12:00:00+08:00",
   "dateNote": "日期为推断",
   "temp": "沸水",
   "tags": [
    "甜感好",
    "有果汁感"
   ],
   "note": "酸甜平衡，有果汁感，苦很弱。参数按 App 默认值，没有逐项复述。"
  },
  {
   "id": "h-gesha-1027",
   "recipe": "gesha-pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.2,
   "seconds": null,
   "timeText": "未计时",
   "date": "2026-10-27T12:00:00+08:00",
   "dateNote": "日期为推断",
   "temp": "沸水",
   "tags": [
    "香气明显",
    "有果汁感",
    "甜感好"
   ],
   "note": "天堂瑰夏香气，果汁感显著，热时甜感明确。花香和水果的具体种类仍在辨认。"
  },
  {
   "id": "h-alo-pure-1026",
   "recipe": "alo-pure",
   "dose": 18,
   "water": 315,
   "ice": 0,
   "grind": 4.6,
   "seconds": null,
   "timeText": "2:30 未流完",
   "date": "2026-10-26T21:00:00+08:00",
   "temp": "约 85°C",
   "tags": [
    "尾苦明显"
   ],
   "note": "热时醇厚，入口甜，后面苦，酸弱，没有明确花果香。另加约 100 g 冰后：甜明显，苦基本没有，酸回来，花果香更明显。"
  },
  {
   "id": "h-gesha-1023",
   "recipe": "gesha-pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.2,
   "seconds": 130,
   "date": "2026-10-23T12:00:00+08:00",
   "temp": "沸水",
   "tags": [
    "甜感好",
    "香气明显",
    "有果汁感"
   ],
   "note": "甜感明显提升，尾苦很弱，香气更明显，有果汁感。"
  },
  {
   "id": "h-gesha-1022",
   "recipe": "gesha-pure",
   "dose": 18,
   "water": 297,
   "ice": 0,
   "grind": 4.6,
   "seconds": 125,
   "date": "2026-10-22T12:00:00+08:00",
   "dateNote": "日期按星期推断",
   "temp": "沸水",
   "tags": [
    "尾苦明显"
   ],
   "note": "4.6 这一杯：甜感没了，后段苦明显。"
  }
 ],
 "gear": [
  [
   "泰摩 Timemore X-pro",
   "精确控温，也是你的注水工具。昆明沸点约 93°C，是上限。出水温度和水流速还没有测过。"
  ],
  [
   "1Zpresso ZP6 Special",
   "每圈 90 格，每格约 22 微米，“4.5”就是 45 格。零点还没有确认。"
  ],
  [
   "Hario Switch 03",
   "360 ml，用 Hario V60-03 滤纸。阀门开是滴滤，关是浸泡。"
  ],
  [
   "清庭 三旋空 山文 280 ml",
   "配开关底座，11-03 到货。滤纸是 NANO 莱赛尔高流速 185 波浪滤纸，简称 NANO 185。11-03 已冲一杯瑰夏（干点 1:30，好喝），下一杯是可选探索：ZP6 4.0。"
  ],
  [
   "电子秤",
   "显示粉水比，所以每一步同时给累计克数和比例。冰不计入比例。"
  ],
  [
   "水",
   "水质没有测过。目标 TDS 40 至 80 ppm。"
  ]
 ],
 "drippers": [
  {
   "id": "sw",
   "name": "Hario Switch 03",
   "short": "Switch 03",
   "detail": "360 ml · V60-03 滤纸"
  },
  {
   "id": "qt",
   "name": "清庭三旋空山文",
   "short": "三旋空山文",
   "detail": "280 ml · NANO 185 波浪滤纸"
  }
 ]
};
