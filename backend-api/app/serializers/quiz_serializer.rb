class QuizSerializer < ActiveModel::Serializer
  attributes :id, :player, :high_score, :category
end
