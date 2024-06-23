import styled from 'styled-components'

const StyledProject = styled.div`
  margin-top: 80px;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const ProjectCard = styled.div`
  width: calc(50% - 10px);
`

const Projects = () => {
  return (
    <StyledProject id="projects">
      <h2>Projects</h2>
      <ProjectsContainer>
        <ProjectCard>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            reiciendis dolorum, asperiores reprehenderit eligendi earum
            adipisci, vero sit aut minima corrupti architecto perspiciatis
            culpa. Dolorem repellat natus voluptatibus repudiandae. Quaerat?
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            reiciendis dolorum, asperiores reprehenderit eligendi earum
            adipisci, vero sit aut minima corrupti architecto perspiciatis
            culpa. Dolorem repellat natus voluptatibus repudiandae. Quaerat?
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            reiciendis dolorum, asperiores reprehenderit eligendi earum
            adipisci, vero sit aut minima corrupti architecto perspiciatis
            culpa. Dolorem repellat natus voluptatibus repudiandae. Quaerat?
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            reiciendis dolorum, asperiores reprehenderit eligendi earum
            adipisci, vero sit aut minima corrupti architecto perspiciatis
            culpa. Dolorem repellat natus voluptatibus repudiandae. Quaerat?
          </p>
        </ProjectCard>
      </ProjectsContainer>
    </StyledProject>
  )
}

export default Projects
