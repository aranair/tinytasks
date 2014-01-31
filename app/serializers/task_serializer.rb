class TaskSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name, :task_details, :start_date, :end_date, :estimate, :created_at, :updated_at, :task_status, :subtasks

  private 

  def attributes
    hash = super
    # p hash[:subtasks].map(&:id)
    hash[:subtasks] = hash[:subtasks].map(&:id)
    hash
  end
end
