class Artist < ApplicationRecord
  belongs_to :Billboard
  has_many :songs, dependent: :destroy
end
