class Item < ActiveRecord::Base
  validates :text, presence: true

  belongs_to :user
end