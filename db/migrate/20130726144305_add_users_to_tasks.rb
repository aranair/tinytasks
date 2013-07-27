class AddUsersToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :user_id, :integer 
    add_column :tasks, :content, :text
  end
end
