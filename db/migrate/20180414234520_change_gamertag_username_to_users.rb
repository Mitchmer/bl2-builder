class ChangeGamertagUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :gamertag, :username
  end
end
