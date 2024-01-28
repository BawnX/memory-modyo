/**
 * return random number for Id
 *
 * @param   {number} min set min number random number
 * @param   {number} max set max number random number
 * @return  {number} Random Id
 */
function GenerateRandomId(min, max) {
  return Math.random() * (max - min) + min;
}

export default GenerateRandomId;
