class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :task_details, :start_date, :end_date, :estimate, :created_at, :updated_at, :is_completed

  def is_completed
    object.status == 1
  end
end
