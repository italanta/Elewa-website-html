// defining the interface objects for the projectItems
// JSDoc comment

/**
 * Interface for classes that represent a project.
 */
interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  imgSrc: string;
}

// This is the data contained in the project one as displayed on the html

// project one
const projectOne: ProjectItem = {
  title: "Introducing conversational learning",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Education",
  imgSrc: "/src/images/Education.jpg"
};
console.log(projectOne)

// project two
const projectTwo: ProjectItem = {
  title: "Content Development for a sustainable future",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Environment",
  imgSrc: "/src/images/Environment.jpg"
};
console.log(projectTwo)

// project three
const projectThree: ProjectItem = {
  title: "Largescale training for healthcare professionals",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Healthcare",
  imgSrc: "/src/images/Healthcare.jpg"
};
console.log(projectThree)

// project four
const projectFour: ProjectItem = {
  title: "Introducing conversational learning",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Education",
  imgSrc: "/src/images/Learning.jpg"
};

console.log(projectFour)
