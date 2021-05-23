import { useSelector, useDispatch } from "react-redux";

export default function Players() {
  const players = useSelector(state => state.players)
  console.log(players);
  return(
    <section>
      <h2>Players</h2>
      <article className="PlayersContainer">
        <div>
          <img src="" alt="" />
          <h3>Player:</h3>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </article>
    </section>
  )
}