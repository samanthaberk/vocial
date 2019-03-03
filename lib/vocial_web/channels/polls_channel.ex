defmodule VocialWeb.PollsChannel do
  use VocialWeb, :channel

  def join("polls:lobby", _payload, socket) do
    {:ok, socket}
  end

end
