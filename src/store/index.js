import { createStore } from 'vuex'

export default createStore({
  state: {
    pids:  ['system-login',
        'system-load'
      ],
    activePid:  0,
    loadDone: false
  },
  getters: {
    getActivePid: state => {
      return state.activePid
    },
    getNextPath: state => {
      const pidName = ''
      if (state.activePid  >= state.pids.length) {
        pidName = state.pids[state.pids.length - 1]
      }else{
        pidName = state.pids[state.activePid + 1]
      }
      if (pidName.includes('system-')) {
        return pidName
      } else if (pidName.includes('user-')) {
        return '/user/' + pidName.replace('user-', '')
      } else if (pidName.includes('post-')) {
        return '/post/' + pidName.replace('post-', '')
      } else {
        return '/'
      }
    },
    getPrevPath: state => {
      const pidName = ''
      if (state.activePid  >= state.pids.length) {
        pidName = state.pids[0]
      }else{
        pidName = state.pids[state.activePid - 1]
      }

      if (pidName.includes('system-')) {
        return pidName
      } else if (pidName.includes('user-')) {
        return '/user/' + pidName.replace('user-', '')
      } else if (pidName.includes('post-')) {
        return '/post/' + pidName.replace('post-', '')
      } else {
        return '/'
      }
    }

  },
  mutations: {
    insortPid(state, pid) {
      state.pids.splice(state.activePid + 1, 0, pid)
      state.activePid++
    },
    removePid(state, pid) {
      state.pid.splice(pid, 1)
    },
    toPid(state, pid) {
      if (state.pids[pid]) {
        state.activePid = pid
      } else {
        state.activePid = 0
      }
    }
  },
  actions: {
    add(context, pid) {
      context.commit('add', pid)
    }
  },
  modules: {
  }
})
