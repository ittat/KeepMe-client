import { createStore } from 'vuex'

const switchPidtoPath = (pid) => {
  if (pid.includes('system-')) {
    return '/' + pid
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
    pids: [],
    activePid: -1,
    loadDone: false,
    token: null,
    username: null,
    userId: null,
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
      if (state.activePid == state.pids.length - 1) {
        pidName = state.pids[state.pids.length - 1]
      } else {
        pidName = state.pids[state.activePid + 1]
      }
      return switchPidtoPath(pidName)

    },
    getPrevPath: state => {
      let pidName = ''
      if (state.activePid == 0) {
        pidName = state.pids[0]
      } else {
        pidName = state.pids[state.activePid - 1]
      }

      return switchPidtoPath(pidName)
    },
    getToken: state => {
        return state.token
    }

  },
  mutations: {
    // 插入 card pid，不跳转
    insortPidName(state, pidName) {
      if (state.pids.includes(pidName)) { } else {
        // state.pids.splice(state.activePid + 1, 0, pidName)
        state.pids.push(pidName)
      }
    },
    // 去 pid card，如果没有就插入，同时跳转
    toPidName(state, pidName) {
      if (state.pids.includes(pidName)) {
        state.activePid = state.pids.indexOf(pidName)
      } else {
        state.pids.splice(state.activePid + 1, 0, pidName)
        state.activePid++
      }
    },
    // 清除 指定 pid
    // removePidName(state, pid) {
    //   state.pids.splice(pid, 1)
    // },
    // 到 指定 pid
    toPid(state, pid) {
      console.log(pid);
      if (state.pids[pid]) {
        state.activePid = pid
      }
    },
    setToken(state, token) {
      state.token = token
    },
    setUsername(state, user) {
      state.username = user.username
    },
    setUserId(state, userId) {
      state.userId = userId
    },
    setActivePid(state, pid) {
      state.activePid = pid
    },
    toNextPid(state) {
      if (state.activePid != state.pids.length - 1) {
        state.activePid++
      }
    },
    toPrevPid(state) {
      if (state.activePid != 0) {
        state.activePid--
      }
    },
    setUserId(state, userId) {
      state.userId = userId
    },
    setUsername(state, username) {
      state.username = username
    },
    closeActivePid(state) {
      state.pids.splice(state.activePid, 1)
      if (state.activePid != 0) {
        state.activePid--
      }
    },
    removeAllPostPid(state) {
      for (let index = 0; index < state.pids.length; index++) {
        if (state.pids[index].includes("post-")) {
          // 删除
          state.pids.splice(index, 1)
          console.log(state.pids)
        }
      }
      state.activePid = state.pids.length == 0 ? 0 : state.pids.length - 1
    },
    closeCardbyPidName(state, pidName) {
      let index = state.pids.indexOf(pidName)
      if (index != -1) {
        state.pids.splice(index, 1)
      }
    }
  },
  actions: {
    // removeAllPostPid
    removeAllPosts(content) {
      return content.commit('removeAllPostPid')
    }
  },
  modules: {
  }
})
