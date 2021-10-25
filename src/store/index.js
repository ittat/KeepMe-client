import { createStore } from 'vuex'



import loadCard from "@views/loadCard.vue"
import logIn from "@views/logIn.vue"
import newPost from "@views/newPost.vue"
import postDetail from "@views/postDetail.vue"
import userInfo from "@views/userInfo.vue"


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
    insortPid(state, pid) {
      if (state.pids.includes(pid)) {
        state.activePid = state.pids.indexOf(pid)
        console.log(state.activePid);
      } else {
        state.pids.splice(state.activePid + 1, 0, pid)
        state.activePid++
      }
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
