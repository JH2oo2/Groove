class Instrument < ApplicationRecord
  belongs_to :user

  # def self.owner_name
  #   User.find(instrument.user_id).username
  # end
end
