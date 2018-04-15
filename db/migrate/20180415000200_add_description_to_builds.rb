class AddDescriptionToBuilds < ActiveRecord::Migration[5.1]
  def change
    add_column :builds, :description, :text
  end
end
