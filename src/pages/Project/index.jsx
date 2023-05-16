import Card from '../../components/card';
import projectDetails from '../../assets/projects';
import './index.scss';

function Projects() {
  return (
    <div className="project-wrapper" id='project'>
      <h1>{`> `}Projects</h1>
      <div className="project-conatiner">
        {projectDetails.map(item => (
          <Card key={item?.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Projects;