class AddImageToGuns < ActiveRecord::Migration[5.1]
  def change
    add_column :guns, :image, :text
  end
end
