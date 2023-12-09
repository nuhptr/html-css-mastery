class Tooltip {}

class ProjectItem {
   constructor(id, updateProjectListsFunction) {
      this.id = id
      this.updateProjectListsHandler = updateProjectListsFunction
      this.connectMoreInfoButton()
      this.connectSwitchButton()
   }

   connectMoreInfoButton() {}

   connectSwitchButton() {
      const projectItemElement = document.getElementById(this.id)
      const switchBtn = projectItemElement.querySelector("button:last-of-type")
      switchBtn.addEventListener("click", this.updateProjectListsHandler)
   }
}

class ProjectList {
   projects = []

   constructor(type) {
      this.type = type
      const projectItems = document.querySelectorAll(`#${type}-projects li`)

      for (const projectItem of projectItems) {
         this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)))
      }
   }

   setSwitchHandlerFunction(switchHandlerFunction) {
      this.switchHandler = switchHandlerFunction
   }

   addProject() {
      console.log(this)
   }

   switchProject(projectId) {
      this.switchHandler(this.projects.find((p) => p.id === projectId))
      this.projects = this.projects.filter((p) => p.id !== projectId)
   }
}

class App {
   static init() {
      const activeProjectsList = new ProjectList("active")
      const finishedProjectsList = new ProjectList("finished")

      activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList))
      finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList))
   }
}

App.init()
