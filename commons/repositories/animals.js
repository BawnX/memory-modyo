/**
 * Fetch Animals for game
 *
 * @async
 * @returns {object}
 */
async function fetchAnimals() {
  return fetch(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20",
  ).then((res) => {
    if (res.status !== 200) {
      throw new Error("error");
    }
    return res.json();
  });
}

export default fetchAnimals;
