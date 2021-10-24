import { createStore } from 'vuex'

const switchPidtoPath = (pid) => {
  if (pid.includes('system-')) {
    return pid
  } else if (pid.includes('user-')) {
    return '/user/' + pid.replace('user-', '')
  } else if (pid.includes('post-')) {
    return '/post/' + pid.replace('post-', '')
  } else {
    return '/'
  }
}


export default createStore({
  state: {
    pids:  ['system-login',
        'system-load'
      ],
    activePid:  0,
    loadDone: false,
    token: null,
  },
  getters: {
    getActivePath: state => {
      return switchPidtoPath(state.pids[state.activePid])
    },
    getActivePid: state => {
      return state.activePid
    },
    getNextPath: state => {
      let pidName = ''
      if (state.activePid  >= state.pids.length) {
        pidName = state.pids[state.pids.length - 1]
      }else{
        pidName = state.pids[state.activePid + 1]
      }
      
      return switchPidtoPath(pidName)

    },
    getPrevPath: state => {
      let pidName = ''
      if (state.activePid  >= state.pids.length) {
        pidName = state.pids[0]
      }else{
        pidName = state.pids[state.activePid - 1]
      }

      return switchPidtoPath(pidName)
    },
    getToken: state => {
      return state.token
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
    },
    setToken(state, token) {
      state.token = token
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
