import ProjectsContent from "../components/PageContents";

const ProjectsPage = () => {
  return (
    <div className="flex h-screen bg-[#fbf8ff]">
      {/* <Sidebar /> */}

      <main className=" flex flex-1 flex-col overflow-hidden">
        {/* <TopNavbar /> */}

        <div className="flex-1 overflow-y-auto">
          <ProjectsContent />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;