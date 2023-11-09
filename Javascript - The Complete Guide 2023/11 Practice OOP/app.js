class Tooltip {}

class ProjectItem {
   constructor(id) {
      this.id = id
      this.connectMoreInfoButton()
      this.connectSwitchButton()
   }

   connectMoreInfoButton() {}

   connectSwitchButton() {
      const projectItemElement = document.getElementById(this.id)
      const switchBtn = projectItemElement.querySelector("button:last-of-type")
   }
}

class ProjectList {
   projects = []

   constructor(type) {
      const prjItems = document.querySelectorAll(`#${type}-projects li`)
      for (const prjItem of prjItems) {
         this.projects.push(new ProjectItem(prjItem.id))
      }
      console.log(this.projects)
   }
}

class App {
   static init() {
      const activeProjectsList = new ProjectList("active")
      const finishedProjectsList = new ProjectList("finished")
   }
}

App.init()
