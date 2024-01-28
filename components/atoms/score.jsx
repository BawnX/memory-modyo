/**
 * Component for users to get avatar.
 *
 * @component
 * @param   {Object} score
 * @param   {string} score.title    title for text points
 * @param   {string} score.body     point for score
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * const title = Score
 * const body = 10
 * return (
 *   <ScoreComponent title={title} body={body} />
 * )
 */

function ScoreComponent({ title, body }) {
  return (
    <article>
      <h2 className="text-xl">{title}</h2>
      <h3 className="text-4xl">{body}</h3>
    </article>
  );
}

export default ScoreComponent;
