import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text,
        id: taskId,
        projectId: prev.selectedProjectId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((project) => project.id !== id),
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prev) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };
  const handleCancel = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((project) => project.id !== id),
      };
    });
  };

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancel}></NewProject>
    );
  } else {
    const project = projectsState.projects.filter(
      (item) => item.id === projectsState.selectedProjectId
    );
    content = (
      <SelectedProject
        selectedProject={project[0]}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      ></SelectedProject>
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      ></SideBar>
      {content}
    </main>
  );
}

export default App;
