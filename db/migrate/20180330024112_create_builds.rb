class CreateBuilds < ActiveRecord::Migration[5.1]
  def change
    create_table :builds do |t|
      t.string :name
      t.string :character
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
