class SubtaskSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name, :task_details, :start_date, :end_date, :created_at, :updated_at, :task_status, :task_id
end
