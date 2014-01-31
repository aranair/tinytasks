class RenameTaskStatusToTaskStatus < ActiveRecord::Migration
  def change
    rename_column :tasks, :status, :task_status
  end
end
