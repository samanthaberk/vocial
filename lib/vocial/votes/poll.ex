defmodule Vocial.Votes.Poll do
  use Ecto.Schema
  import Ecto.Changeset
  alias Vocial.Accounts.User
  alias Vocial.Votes.Poll
  alias Vocial.Votes.Option

  schema "polls" do
    field :title, :string

    has_many :options, Option
    belongs_to :user, User

    timestamps()
  end

  def changeset(%Poll{}=poll, attrs) do
    poll
    |> cast(attrs, [:title, :user_id])
    |> validate_required([:title, :user_id])
  end

end
