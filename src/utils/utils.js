const dectime = (time) => {
    const postTime = new Date(time)
    const nowTime = new Date()
    const diffTime = nowTime.getTime() - new Date(postTime).getTime()

    if (Math.floor(diffTime/(24*3600*1000))) {
        return Math.floor(diffTime/(24*3600*1000)) + ' days'
    } else if (Math.floor(diffTime/(3600*1000))) {
        return Math.floor(diffTime/(3600*1000)) + ' hours'
    } else if (Math.floor(diffTime/(60*1000))) {
        return Math.floor(diffTime/(60*1000)) + ' minutes'
    } else {
        return  '1 minutes'
    }

}

export default dectime
