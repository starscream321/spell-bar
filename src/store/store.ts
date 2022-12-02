import { defineStore } from 'pinia'
import { Ability } from '@/type'

export const usePanelStore = defineStore('panel', {
  state: () => ({
    items: [
      {
        id: 1,
        name: 'MEM',
        icon: 'https://img.icons8.com/fluency/2x/gta-5.png',
        isCd: false,
        cd: 20
      },
      {
        id: 2,
        name: 'MEMos',
        icon: 'https://img.icons8.com/wired/2x/gta-5.png',
        cd: 20,
        isCd: false
      },
      {
        id: 3,
        name: 'asdMEM',
        icon: 'https://img.icons8.com/nolan/2x/gta-5.png',
        cd: 25
      },
      {
        id: 4,
        name: 'asdafMEM',
        icon: 'https://img.icons8.com/dusk/2x/gta-5.png'
      },
      {
        id: 5,
        name: 'asdczeMEM',
        icon: 'https://img.icons8.com/ios/2x/grand-theft-auto-v.png'
      },
      {
        id: 6,
        name: 'asdzxcsdMEM',
        icon: 'https://img.icons8.com/ios-filled/2x/grand-theft-auto-v.png'
      },
      {
        id: 92,
        name: 'asdczdsMEM',
        icon: 'https://img.icons8.com/ios-filled/2x/rockstar-games.png'
      },
      {
        id: 23,
        name: 'asdjgashfas',
        icon: 'https://img.icons8.com/wired/2x/grand-theft-auto-v.png'
      },
      {
        id: 32,
        name: 'asdkashf',
        icon: 'https://img.icons8.com/dotty/2x/rockstar-games.png'
      }, {
        id: 1333,
        name: 'asdkahsfa',
        icon: 'https://img.icons8.com/cute-clipart/2x/rockstar-games.png'
      },
      {
        id: 12123,
        name: 'MEasdkasdM',
        icon: 'https://img.icons8.com/wired/2x/rockstar-games.png'
      },
      {
        id: 133,
        name: 'MEasdasfM',
        icon: 'https://img.icons8.com/nolan/2x/rockstar-games.png',
        cd: 20
      },
      {
        id: 1123123,
        name: 'MEasfacchuM',
        icon: 'https://img.icons8.com/nolan/2x/fivem.png'
      }
    ] as Ability[],
    spells: new Array(13) as Ability [],
    shortPanel: new Array(6) as Ability[]
  })
})
