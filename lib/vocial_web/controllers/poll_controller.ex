defmodule VocialWeb.PollController do
  use VocialWeb, :controller

  def index(conn, _params) do
   polls = Vocial.Votes.list_polls()

   conn
   |> put_layout(:special)
   |> render("index.html", polls: polls)
 end
end
