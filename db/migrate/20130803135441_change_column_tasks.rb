class ChangeColumnTasks < ActiveRecord::Migration
  def change
    rename_column :tasks, :content, :task_details
  end
end
