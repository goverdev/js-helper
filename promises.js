const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: '200',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Client data', data)
    })
    .catch(err => console.error('Error', err))
    .finally(() => console.log('Finally '))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('Sleep 2 sec'))
sleep(3000).then(() => console.log('Sleep 3 sec'))

Promise.all([sleep(2000), sleep(3000)])
.then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(3000)])
.then(() => {
    console.log('Race promises')
})