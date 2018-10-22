class API {
    static init () {
      this.baseUrl = 'http://localhost:3000/api/v1'
      this.usersUrl = `${this.baseUrl}/users`
      this.postsUrl = `${this.baseUrl}/posts`
      this.commentsUrl = `${this.baseUrl}/comments`
    //   this.userId = 1
    }
  
    // Users API
    static getUsers () {
      return fetch(this.usersUrl)
        .then(resp => resp.json())
    }
  
    static getUser (id) {
      return fetch(`${this.usersUrl}/${id}`)
        .then(resp => resp.json())
    }
  
    static createTask (task) {
      return fetch(this.tasksUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      }).then(resp => resp.json())
    }


    // Posts API

    static getPosts () {
        return fetch(this.postsUrl)
          .then(resp => resp.json())
      }
    
    static getPost (id) {
        return fetch(`${this.postsUrl}/${id}`)
            .then(resp => resp.json())
    }
    
    static createPost (post) {
        return fetch(this.postsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }).then(resp => resp.json())
    }

    static deletePost (id) {
        return fetch(`${this.postsUrl}/${id}`, {
            method: 'DELETE'
        })
    }


    // Comments API



  }
  
  API.init()