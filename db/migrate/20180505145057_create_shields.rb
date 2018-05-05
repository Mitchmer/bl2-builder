class CreateShields < ActiveRecord::Migration[5.1]
  def change
    create_table :shields do |t|
      t.string :name
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
