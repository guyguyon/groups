class Group < ActiveRecord::Base
  has_many :groups_users
  has_many :users, :through => :groups_users

  STATUS = { deleted: 0, active: 1 }

  validates_presence_of :title
  validates_presence_of :status

  scope :actives, where(:status => STATUS[:active])

  def self.main_page_json
    self.actives.to_json.html_safe
  end

end
